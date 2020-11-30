// import the mangose library
const mongoose = require('mongoose');

//model -

const PeopleSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: false
    },
    first_name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    catch_phrase: {
      type: String,
      required: false
    },
    avatar: {
      type: String,
      required: false
    },
    date: {
      type: Date,
      default: new Date(),
      required: true
    }
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('People', PeopleSchema);
  