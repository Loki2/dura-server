const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const screamSchema = Schema({
    writter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    body: {
        type: String,
    },
    files: {
        type: String,
        required: true
    },
    privacy: {
      type: Number
    },
    postedAt: {
      type: Date,
      default: Date.now
    }
}, {TimeStamp: true})


const Scream = mongoose.model('Scream', screamSchema);

module.exports =  Scream;