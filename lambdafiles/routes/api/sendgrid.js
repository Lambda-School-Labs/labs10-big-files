require("dotenv").config();
const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "jaskip2@gmail.com",
  from: "jaskip2@gmail.com",
  subject: "A friend wants to send you a file!",
  text: "Insert url here",
  html: "<strong>Insert url here</strong>"
};

router.get("/", (req, res) => {
  sgMail.send(msg);
  console.log("email sent");
});

module.exports = router;
