const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

router.post("/api/sendmail", (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const emailHTML = `
        <div style="text-align: center; margin: 0px">
            <h2>Message From: ${req.body.name}</h2>
            <h5>Email: ${req.body.email}</h5>
            <hr>
        </div>
        <div>
            <p>${req.body.message}</p>
        </div>
    `;

    const mailOptions = {
        name: req.body.name,
        address: req.body.email,
        sender: req.body.email,
        to: process.env.EMAIL_ADDRESS,
        replyTo: req.body.email,
        subject: req.body.subject,
        html: emailHTML
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json(error);
        } else {
            console.log("Email sent: " + info.response);
            res.status(200);
        }
    });
});

module.exports = router;
