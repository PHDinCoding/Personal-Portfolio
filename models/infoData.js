var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userDataSchema = new Schema({

  name: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String
  },

});

var userData = mongoose.model("userData", userDataSchema);

module.exports = userData;