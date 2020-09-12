const express = require('express'); // Require Express Framework for All implement
const router = express.Router(); // Require Router For access to Each of Route Controller
const {
  register,
  login,
  getRecovery,
} = require('../Controllers/UserAuthController');

const ProfileController = require('../Controllers/UserProfileController');

/*    Routes
 * ********* Register
 * ********* Login
 * ********* Password Recovery
 */

 /* 
  ********** Admin Controller Access
  ********** Users
  ********** Delete User
  ********** Update User
  ********** Suspend User 
  */

/*
 * ********************* Registration Router
 */
router.post('/register', register)
      //.post(UserController.register)


/*
 * ********************* Login Router
 */
router.post('/login', login)
      //.post(UserController.login);

/*
 * ********************* Recovery Router
 */
router.get('/recovery', getRecovery)


//User Avatar - Profile
router.post('/:id/upload-avatar', async (req, res, next) => {
  res.send('upload avatar')
})

router.get('/:id/get-avatar',  async (req, res, next) => {
  res.send('get avatar')
})

router.patch('/:id/updata-avatar',  async (req, res, next) => {
  res.send('updata avatar')
})


router.post('/:id/create-profile', ProfileController.createProfile);

router.get('/:id/get-profile', ProfileController.getProfile);

router.patch('/:id/update-profile', ProfileController.updateProfile);

      
module.exports = router; // Export Route to User from App.js
