const express = require('express');
const router = express.Router();

//@route    GET api/placards
//@desc     Get all placards
//@access   Public
router.get('/', (req, res) => {
  res.send('Get all placards');
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
