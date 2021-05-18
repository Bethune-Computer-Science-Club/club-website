const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, require: true },
  authors: { type: String, require: true },
  description: { type: String, require: true },
  picture: { type: String, require: true },
  projectType: { type: String, require: true },
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;