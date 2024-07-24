const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
