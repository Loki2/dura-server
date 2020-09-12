const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mentalStatusSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
}, {timestamps: true})

const MentalStatus = mongoose.model('MentalStatus', mentalStatusSchema);
module.exports = MentalStatus;