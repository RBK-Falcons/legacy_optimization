const nodemailer = require('nodemailer');
function sendEmail(email, number) {
  console.log('Number:   ' + number);

  // the function that sends the email

  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bankexchange4@gmail.com', // generated ethereal user
        pass: 'exchange1234', // generated ethereal password
      },
    });

    // send mail with defined transport object
    transporter.sendMail(
      {
        from: '"Xchange" <bankexchange4@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Credit card Number ✔', // Subject line
        text: 'Dear customer', // plain text body
        html: `<h2>Dear customer</h2><p>This is your credit card number : </p> <p>${number}<p/>`, // html body
      },
      (err, info) => {
        if (err) {
          return console.log(err);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      }
    );
  });
}

module.exports = sendEmail;
