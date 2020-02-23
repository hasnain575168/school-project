const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
