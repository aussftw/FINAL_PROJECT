const nodemailer = require("nodemailer");
const keys = require("../config/keys");
const getConfigs = require("../config/getConfigs");

module.exports = async (subscriberMail, letterSubject, letterHtml, res) => {
  const configs = await getConfigs();

  //authorization for sending email
  let transporter = nodemailer.createTransport({
<<<<<<< HEAD
     tls:{
        rejectUnauthorized: false
=======
    tls: {
      rejectUnauthorized: false
>>>>>>> 15ff69f572e5c321854dd22ccda592afe798a8db
    },
    service:
      process.env.NODE_ENV === "production"
        ? configs.production.email.mailService
        : configs.development.email.mailService,
    auth: {
      user:
        process.env.NODE_ENV === "production"
          ? configs.production.email.mailUser
          : configs.development.email.mailUser,
      pass:
        process.env.NODE_ENV === "production"
          ? configs.production.email.mailPassword
          : configs.development.email.mailPassword
    }
  });

  const mailOptions = {
    from:
      process.env.NODE_ENV === "production"
        ? configs.production.email.mailUser
        : configs.development.email.mailUser,
    to: subscriberMail,
    subject: letterSubject,
    html: letterHtml
  };

  const result = await transporter.sendMail(mailOptions);

  return result;
};
