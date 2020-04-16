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
router.put('/:id', (req, res) => {
  res.send('Update placard');
});

//@route    DELETE api/placards/:id
//@desc     Delete placard
//@access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete placard');
});

module.exports = router;
