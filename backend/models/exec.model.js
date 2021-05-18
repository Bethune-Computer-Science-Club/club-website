const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const execSchema = new Schema({
  name: { type: String, require: true },
  role: { type: String, require: true },
  description: { type: String, require: true },
  picture: { type: String, require: true },
  startingYear: { type: String, required: true },
  endingYear: { type: String, required: true },

}, {
  timestamps: true,
});

const Exec = mongoose.model('Exec', execSchema);

module.exports = Exec;