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
    console.log(placards);
    res.json(placards);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    POST api/placards
//@desc     Add new placard
//@access   Private
router.post('/', (req, res) => {
  res.send('Add placard');
});

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
