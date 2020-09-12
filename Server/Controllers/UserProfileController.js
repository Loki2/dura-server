//import from models
const Profile = require('../Models/ProfileModel');
module.exports = {
  createProfile: async (req, res, next) => {
    res.send('Create profile route')
  },

  getProfile: async (req, res, next) => {
    res.send('Get profile route')
  },

  updateProfile:  async (req, res, next) => {
    res.send('Update profile route')
  }
}