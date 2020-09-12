const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../Config/SecretStore');
const registerValidator = require('../Validator/RegisterValidator');
const loginValidator = require('../Validator/LoginValidator');
const { serverError, resourceError } = require('../Utils/Error');

//IMport From Models
const User = require('../Models/UserModel');

//Sign Token
SignToke = user => {
  return jwt.sign({
    iss: 'mySecret',
    _id: user._id,
    username: user.username,
    email: user.email,
    iat: new Date().getTime(), //Get Current Time
    exp: new Date().setDate(new Date().getDate() + 1) //Get Current Time + 1 a head
  }, "JWT_SECRET") //, { expiresIn: '2h'}
}


module.exports = {
  /*    Controller
    * ********* Register
    * ********* Login
    * ********* Password Recovery
  */
  // Registration Controller
  register: async (req, res, next) => {
    let { username, email, password, confirmPassword } = await req.body; //Read Client Datas
    let validate = await registerValidator({ username, email, password, confirmPassword })
    //Validation Check User Data
    if(!validate.isValid) {
      res.status(400).json(validate.error)
    } else {
       //Check For Duplicated User Account 
      User.findOne({ email })
          .then(user => {
            if(user) {
              return resourceError(res, 'Email is Already Exist...!')
            }
            //lemme Hash Password
            bcrypt.hash(password, 11, (err, hash) => {
              if(err) {
                return resourceError(res, 'Server Error Occurred')
              }

              //New User Object
              let user = new User({
                username,
                email,
                password: hash,
              })
              //Save To Database
              user.save()
              //Generate Token And Response Back
              const token = SignToke(user);
              res.status(200).json({
                message: 'Register Successfully',
                data: user,
                token: `Bearer ${token}`
              })
            })
          })
          .catch(error => serverError(res, error))
    }
  },

   // Login Controller
   login: async (req, res, next) => { 
    //Extract Datas From Request
    let {  email, password} = await req.body;
    //Validate Datas 
    let validate = loginValidator({ email, password })
    if(!validate.isValid) {
      return res.status(400).json(validate.error)
    }
    //Check For User Availability 
    User.findOne({email})
        .then(user => {
          if(!user) {
            return resourceError(res, 'User Not Found...!')
          }
          //Compare Password
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              return serverError(res, error)
            }
            if(!result) {
              return resourceError(res, 'Password Doesn\'t Match')
            }

            //Generate Token And Response Back
            const token = SignToke(user);
            res.status(200).json({
              message: 'Login Successfully',
              token: `Bearer ${token}`
            })
          })
        })
        .catch(error => serverError(res, error))
  },


  //********* Password Recovery
  getRecovery: async (req, res, next) => {
    res.send('this text from Recovery Or Change Password')
  }

}