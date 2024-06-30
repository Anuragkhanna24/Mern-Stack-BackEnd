const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  dateofbirth: String,
  residentialstreet1:String,
  residentialstreet2:String,
  permanentstreet1:String,
  permanentstreet2:String,
  filename:String,
  filetype:String,
  avatar: String ,
  formData1:Array
});

module.exports = mongoose.model('User', userSchema);