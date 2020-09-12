const validator = require('validator');

const validate = user => {
  let error = {}
  //Check User's Email data from Input
  if(!user.email) {
    error.email = 'Please Provide Your Email Address'
  } else if(!validator.isEmail(user.email)){
    error.email = 'Please Provide Valid Email'
  }

  //Check User's Password From data input
  if(!user.password) {
    error.password = 'Please Provide Your Password'
  }

  return {
    error,
    isValid: Object.keys(error).length === 0
  }
}

module.exports = validate;