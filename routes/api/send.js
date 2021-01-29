const router = require("express").Router();
var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();




// Matches with "/api/send"
router.post('/api', (req, res) => {
    var data = req.body;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email, // your email address to send email from
            pass: process.env.password // your gmail account password
        }
    });

    var mailOptions = {
        from: data.email,
        to: 'admin@poolerpaws.com',
        subject: 'Contact Form',
        html: `<p>${data.name}</p>
            <p>${data.email}</p>
            <p>${data.message}</p>`
    };

    transporter.sendMail(mailOptions,
        (error, response) => {
          if(error) {
            res.send(error)
          }else {
            res.send('Success')
          }
          transporter.close();
        });

    })

    module.exports = router;