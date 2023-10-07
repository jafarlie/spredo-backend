import { NextFunction, Request, Response } from "express";
require('dotenv').config();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp.forwardemail.net",
//   port: 465,
//   secure: true,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: 'info@spredo.ca',
//     pass: ''
//   }
// });

export const postWebsiteEmailSubmission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("req body: ", req.body);
    const {firstName, lastName, email, subject, body } = req.body;
    // const response = await getUserProfileAnalytics(req.body.profiles);
    console.log("process.env.SENDGRID_API_KEY: ", process.env.SENDGRID_API_KEY)
    const msg = {
      to: 'jafarli.elvin1997@gmail.com', // Change to your recipient
      from: 'info@spredo.ca', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
        return res.status(200).send({message: "Email submitted successfully"});
      })
      .catch((error: any) => {
        return res.status(400).send({message: `Email submission failed, try again ${error}`});
      })
  } catch (error) {
    console.error(error);
    return res.status(400).send({message: "Email submission failed, try again"});
  }
};

// export const postWebsiteEmailSubmission = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     console.log("req body: ", req.body);
//     const {firstName, lastName, email, subject, body } = req.body;
//     // const response = await getUserProfileAnalytics(req.body.profiles);
//     console.log("process.env.SENDGRID_API_KEY: ", process.env.SENDGRID_API_KEY)
//     const msg = {
//       to: 'jafarli.elvin1997@gmail.com', // Change to your recipient
//       from: 'info@spredo.ca', // Change to your verified sender
//       subject: 'Sending with SendGrid is Fun',
//       text: 'and easy to do anywhere, even with Node.js',
//       html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     }
//     const info = await transporter.sendMail({
//       from: 'jafarli.elvin1997@gmail.com', // sender address
//       to: "info@spredo.ca", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });

//     console.log("Message sent: %s", info.messageId);
//     // sgMail
//     //   .send(msg)
//     //   .then(() => {
//     //     console.log('Email sent')
//     //     return res.status(200).send({message: "Email submitted successfully"});
//     //   })
//     //   .catch((error: any) => {
//     //     return res.status(400).send({message: `Email submission failed, try again ${error}`});
//     //   })
//     return res.status(200).send({message: "Email submitted successfully"});
//   } catch (error) {
//     console.error(error);
//     return res.status(400).send({message: "Email submission failed, try again"});
//   }
// };



