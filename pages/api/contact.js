require("dotenv").config();

export default function (req, res) {
  const password = process.env.password;

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "allcustomsheetmetalmailbot@gmail.com",
      pass: password,
    },
    secure: true,
  });

  const mailData = {
    from: "allcustomsheetmetalmailbot@gmail.com",
    to: "fluentinstroll@protonmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
}
