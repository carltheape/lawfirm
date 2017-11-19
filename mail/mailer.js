var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tbfinkle@gmail.com.com',
    pass: 'Trynna2@'
  }
});

var mailOptions = {
  from: 'tbfinkle@gmail.com',
  to: 'tbfinkle@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});