const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  firstname: {
    type: String,
    maxLength: 100,
    required: true
  },
  lastname: {
    type: String,
    maxLength: 100,
    required: true
  },
  gender: {
    type: String,
    maxLength: 10,
    required: true
  },
  mentalStatus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MentalStatus',
    required: true
  },
  birthdate: {
    type: Date,
    // required: true
  },
  phone: {
    type: String,
    maxLength: 15,
    required: true
  },
  bio: {
    type: String
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Province',
  },
  currentown: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Province',
  },
  hometown: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Province',
  },
  avatar: {
    type: String,
    // required: true
  },
  joindate: {
    type: Date,
    default: Date.now
  }
},  { timestamps: true })

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile
