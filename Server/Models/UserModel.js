const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role : {
      type:Number,
      default: 0 
  },
  token : {
      type: String,
  },
  tokenExp :{
      type: Number
  }
}, {timestamps: true})

const User = mongoose.model('User', userSchema);
module.exports = User;