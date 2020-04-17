const mongoose = require('mongoose');
const config = require('config'); //we bring this in as we need access to that global variable
const db = config.get('mongoURI'); //because we brought in config, we have access to the mongoURI

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log('Mongodb Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); //Will exit with failure
  }
};

module.exports = connectDB;
