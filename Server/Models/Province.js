const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provinceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  districtId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'District',
  }
}, {timestamps: true})

const Province = mongoose.model('Province', provinceSchema);
module.exports = Province;