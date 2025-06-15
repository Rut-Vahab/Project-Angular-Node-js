import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rt80009000@gmail.com',
    pass: 'tzju llbt boli uobh',
  },
});

export const sendEmail = (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'rt80009000@gmail.com',
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send({ success: false, error: error.toString() });
    }
    res.send({ success: true, messageId: info.messageId });
  });
};