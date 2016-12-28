const mongoose = require ('mongoose');
const bcrypt   = require ('bcrypt');

const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  isClosed: {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  isStarredBoard: {
    type: Boolean, 
    default: false
  }
});

module.exports = mongoose.model('Board', BoardSchema);