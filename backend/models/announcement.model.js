const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const announcementSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  picture: { type: String, require: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;