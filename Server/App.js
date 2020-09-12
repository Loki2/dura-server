const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Config = require('./Config/Database');
const app = express();
const passport = require('passport');
/*
 **** Use Morgan For info each routes memory in the cache
 */
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Middleware Images
app.use('/uploads', express.static('uploads'));
/*
 ***** Connect to Database
 */
mongoose.connect( Config.database_url, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', function() {
    console.log('Connected To Mongo DB...!')
})
/*
***** Passport initialization
*/
app.use(passport.initialize());
require('./Passport/Passport')(passport);

/*
 **** Middle ware Authorization  here
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if(req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});
/**
 * ***** Import ROUTER FROM Routes
*/
const userRoute = require('./Routes/UserAuthRouter');
const screamRoute = require('./Routes/ScreamRouter');

/**
 * ***** USE ROUTES FROM IMPORT As Api
*/
app.use('/api/users', userRoute);
app.use('/api/screams', screamRoute);
/*
 **** Use error handling Routes
 */
// app.use((req, res, next) => {
//   const error = new Error('Not Found');
//   error.status = 404;
//   next(error);
// });
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//       error: {
//           message: error.message
//       }
//   })
// });


module.exports = app;