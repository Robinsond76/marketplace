const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Placard = require('../models/Placard');

//@route    GET api/placards
//@desc     Get all placards
//@access   Public
router.get('/', async (req, res) => {
  try {
    const placards = await Placard.find({}).sort({
      date: -1,
    });

    res.json(placards);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    GET api/placards/user
//@desc     Get all user placards
//@access   Private
router.get('/user', auth, async (req, res) => {
  try {
    const placards = await Placard.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.json(placards);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    POST api/placards
//@desc     Add new placard
//@access   Private
router.post(
  '/',
  [auth, [check('title', 'title is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, desc, img, email, phone, type } = req.body;

    try {
      const newPlacard = new Placard({
        title,
        desc,
        img,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const placard = await newPlacard.save();

      res.json(placard);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route    PUT api/placards/:id
//@desc     Update placard
//@access   Private
router.put('/:id', auth, async (req, res) => {
  const { title, desc, img, email, phone, type } = req.body;

  //Build a placard object
  const placardFields = {};
  if (title) placardFields.title = title;
  if (desc) placardFields.desc = desc;
  if (img) placardFields.img = img;
  if (email) placardFields.email = email;
  if (phone) placardFields.phone = phone;
  if (type) placardFields.type = type;

  try {
    let placard = await Placard.findById(req.params.id);

    if (!placard) return res.status(404).json({ msg: 'Placard not found' });

    //Make sure user owns placard
    if (placard.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized' });
    }

    placard = await Placard.findByIdAndUpdate(
      req.params.id,
      { $set: placardFields },
      { new: true }
    );

    res.json(placard);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    DELETE api/placards/:id
//@desc     Delete placard
//@access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let placard = await Placard.findById(req.params.id);

    if (!placard) return res.status(404).json({ msg: 'Placard not found' });

    //Make sure user owns placard
    if (placard.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized' });
    }

    await Placard.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Placard Removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
