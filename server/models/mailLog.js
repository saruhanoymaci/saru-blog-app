const mongoose = require("mongoose");

const mailLogSchema = new mongoose.Schema({
  to: { type: String, required: true },
  subject: { type: String, required: true },
  text: { type: String },
  html: { type: String },
  status: { type: String, required: true },
  error: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MailLog", mailLogSchema);