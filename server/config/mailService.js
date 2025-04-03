const nodemailer = require("nodemailer");
const MailLog = require("../models/mailLog");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (to, subject, text, html = null) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html,
    });

    console.log("E-posta gönderildi: %s", info.messageId);

    await MailLog.create({
      to,
      subject,
      text,
      html,
      status: "success",
    });

    return info;
  } catch (error) {
    console.error("E-posta gönderme hatası:", error);

    await MailLog.create({
      to,
      subject,
      text,
      html,
      status: "failure",
      error: error.message,
    });

    throw error;
  }
};

module.exports = sendMail;
