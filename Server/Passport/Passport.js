//const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
//const JWT_SECRET = require('../Config/SecretStore');

//Import from Model
const User = require('../Models/UserModel');
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('Bearer');
opts.secretOrKey = 'JWT_SECRET';


module.exports = (passport) => {
  passport.use(new JwtStrategy(opts, (playload, done) => {
      User.findOne({ _id: playload._id})
          .then(user => {
            if(!user) {
              return done(null, false)
            } else {
              return done(null, user)
            }
          })
          .catch(error => { 
            Console.log(error)
            return done(error)
           })
  }))
}