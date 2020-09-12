const validator = require('validator');

const validate = user => {
  let error = {}
  //Check User's Name data from input
  if(!user.username) {
    error.username = 'Please Provide Your Username'
  }
  //Check User's Email data from Input
  if(!user.email) {
    error.email = 'Please Provide Your Email Address'
  } else if(!validator.isEmail(user.email)){
    error.email = 'Please Provide Valid Email'
  }

  //Check User's Password From data input
  if(!user.password) {
    error.password = 'Please Provide Your Password'
  }else if(user.password.length < 8) {
    error.password = 'Password Must Be Greater Than 8 Characters'
  }

  //Check User's Confirm Password From data input
  if(!user.confirmPassword) {
    error.confirmPassword = 'Please Provide Your Confirm Password'
  } else if (user.password !== user.confirmPassword) {
    error.confirmPassword = 'Password Doesn\'t  Match'
  }

  return {
    error,
    isValid: Object.keys(error).length === 0
  }
}

module.exports = validate;