const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  note: {
    type: String,
    trim: true,
    required: [true, 'You must have a note'],
    minlength: [3, 'Your note needs to be at least 3 characters long'],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Note', noteSchema);
