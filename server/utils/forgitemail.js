const nodemailer = require('nodemailer');

function formateOtpToEmailBody(useName, message) {
    const formatMessage = `<!DOCTYPE html>
    <html>
        <head>
        </head>
        <body>
            Dear ${useName}
            <br>
            <br>
              You can reset the password using attached link: <b>${message}</b>.
            <br>
            <br>
              To ensure the safety of your information, do not share the link with any one
            <br>
            <br>
            <br>
     	      Best regards,
            <br>
              Innovation tour
        </body>
    </html>`;
    return formatMessage;
}

function generateRandomNumber() {
    const min = 100000; // minimum value (inclusive)
    const max = 999999; // maximum value (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sendForgotEMail(send_to, message) {
    const verificationCode = `${generateRandomNumber()}`;
    const transporter = nodemailer.createTransport({
        host: process.env["EMAIL_HOST"],
        port: 587,
        auth: {
            user: process.env["EMAIL_USER"], // generated ethereal user
            pass: process.env["EMAIL_PASS"], // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const options = {
        from: process.env["EMAIL_USER"],
        to: send_to,
        subject: `Verification One-Time-Password`,
        html: formateOtpToEmailBody(send_to, message),
    }

    // send Mail
    return new Promise((resolve, reject) => {
        transporter.sendMail(options).then(() => {
            resolve(verificationCode);
        }).catch((err) => {
            resolve(verificationCode);
        })
    });
}

module.exports = sendForgotEMail;