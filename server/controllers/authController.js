var exports = (module.exports = {});
const sendEmail = require("../utils/email");
const Token = require("../models/token");
const { User, validate } = require("../models/user");
const express = require("express");
const crypto = require("crypto");
require("dotenv").config();
var bcrypt = require("bcrypt-nodejs");
const sendForgotEMail = require("../utils/forgitemail");


let config = require("../config/database"),
  jwt = require("jsonwebtoken");


const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendVerificationEmail = (targetEmail, verificationLink) => {
  const msg = {
    to: targetEmail,
    from: "lead.innovation.tour.org@gmail.com", // Use the email address or domain you verified above
    subject: "Verify your email address",
    html: `<div>To complete your registration, we need you to verify your email address.<br/><br/><a href='${verificationLink}'>Verify Email</a></strong>`,
  };


  sgMail.send(msg).then(
    () => { },
    (error) => {
      console.error(error);


      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};


exports.signup = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res
        .status(400)
        .json({ success: false, msg: error.details[0].message });


    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).json({
        success: false,
        errCode: "email_exists",
        msg: "This email is already registered.",
      });


    const allUsers = await User.find();
    const userCount = allUsers.length;
    const batchNumber = Math.ceil(userCount / 20);
    user = await new User({
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
      address: req.body.address,
      phonenumber: req.body.phonenumber,
      password: req.body.password,
      role: req.body.role || "Student",
      batch: req.body.batch || `TourBatch${batchNumber}`,
      verified: req.body.verified || false,
      depositCredited: req.body.depositCredited || false,
    }).save();


    let token = await new Token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
      created: Number(new Date()),
    }).save();


    const message = `${process.env.BASE_URL}/verify/${token.userId}/${token.token}`;
    sendVerificationEmail(user.email, message);


    res.status(200).json({
      success: true,
      msg: "Account is created successfully. Please check your mailbox for email verification!",
      link: message,
    });
  } catch (error) {
    res.status(400).send("An error occured");
  }
};


exports.getAllUser = async function (req, res) {
  try {
    const allUsers = await User.find();
    res.status(200).json({
      success: true,
      allUsers: allUsers,
    });
  } catch (error) {
    res.status(400).send("An error occured");
  }
};


exports.updateUser = async function (req, res) {
  try {
    await User.findOneAndUpdate(
      {
        _id: req.body.id,
      },
      req.body.user,
      { upsert: true, new: true },
      function (err, result) {
        if (err) {
          res.status(200).json({
            success: false,
            msg: "Error in Updation",
          });
        }
        res.status(200).json({
          success: true,
          msg: "Successfully Updated",
        });
      }
    );
  } catch (error) {
    res.status(400).send("An error occured");
  }
};


exports.deleteUser = async function (req, res) {
  try {
    await User.findOneAndDelete(
      {
        _id: req.body.id,
      },
      function (err, result) {
        if (err) {
          res.status(200).json({
            success: false,
            msg: "Error in Deletion",
          });
        }
        res.status(200).json({
          success: true,
          msg: "Successfully Deleted",
        });
      }
    );
  } catch (error) {
    res.status(400).send("An error occured");
  }
};


exports.signin = function (req, res) {
  console.log("Signin-called")
  User.findOne(
    {
      email: req.body.email,
    },
    function (err, user) {
      if (err) throw err;


      if (!user) {
        res.status(401).json({
          success: false,
          errCode: "user_not_found",
          msg: "We can't find this user. Please try to create an account with this email.",
        });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            if (user.verified) {
              // if user is found and password is right create a token
              let token = jwt.sign(user.toJSON(), config.secret);
              // return the information including token as JSON
              res.json({ success: true, token: "JWT " + token, user });
            } else {
              res.json({
                success: false,
                errCode: "email_verify",
                msg: "Please check your mailbox!",
              });
            }
          } else {
            res.status(401).json({
              success: false,
              errCode: "wrong_pw",
              msg: "Wrong Password! Please input correct password.",
            });
          }
        });
      }
    }
  );
};


exports.resendVerification = function (req, res) {
  User.findOne(
    {
      email: req.body.email,
    },
    async (err, user) => {
      if (err) throw err;


      if (!user) {
        res.status(401).json({
          success: false,
          errCode: "user_not_found",
          msg: "We can't find this user. Please try to create an account with this email.",
        });
      } else {
        let updatedToken = await Token.findOneAndUpdate(
          { userId: user._id },
          {
            token: crypto.randomBytes(32).toString("hex"),
            created: Number(new Date()),
          },
          {
            new: true,
            useFindAndModify: false,
          }
        );
        const message = `${process.env.BASE_URL}/verify/${updatedToken.userId}/${updatedToken.token}`;
        sendVerificationEmail(user.email, message);


        res.status(200).json({
          success: true,
          msg: "The link for email verification is sent again. Please check your mailbox!",
          link: message,
        });
      }
    }
  );
};


exports.verify = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send("Invalid link");


    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link");
    console.log("time", Number(new Date()) - token.created);
    let interval = (Number(new Date()) - token.created) / 1000;
    if (interval < 600) {
      //expiration is 10 mins
      await User.updateOne({ _id: user._id }, { verified: true });
      res.redirect(process.env.HOME_URL);
    } else
      res
        .status(400)
        .send(
          "The link is expired. Please try to send verification link again!"
        );
  } catch (error) {
    res.status(400).send("An error occured");
  }
};


exports.scavenger = async (req, res) => {
  const { scavengerData: { name, cohort }, id: userId } = req.body;
  try {
    // Find the user by their ID
    const user = await User.findById(userId);


    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }


    user.scavengerHunt = { name, cohort };


    await user.save();


    return res.status(200).json({ success: true, message: 'Scavenger hunt data added successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }


};

exports.resetPassword = async (req, res) => {
  try {
    const {
      email,
      currentPassword,
      newPassword,
    } = req.body;
    let user = await User.findOne({ email });

    await bcrypt.compare(currentPassword, user.password, async function (err, isMatch) {
      console.log({ err, isMatch })
      if (err) {
        res.status(400).json({
          success: false,
          msg: "Current password wrong!!",
        });
      }
      if (isMatch) {
        user.password = newPassword;
        await user.save();
        res.status(400).json({
          success: true,
          msg: "Password updated successfully!!",
        });
      } else {

        res.status(400).json({
          success: false,
          msg: "Something went wrong!",
        });
      }
    });
  } catch (error) {
    res.status(400).send("An error occured");
  }
};

exports.forgotPassword = async (req, res) => {
  const {
    email
  } = req.body;
  const user = await User.findOne({
    email
  });
  if (user) {
    const token = jwt.sign(user.toJSON(), config.secret);
    const message = `${process.env.SET_PASSWORD_URL}?token=${token}`;
    try {
      await sendForgotEMail(email, message);
    } catch (e) {
      console.log(e);
    }
    res.status(200).json({
      success: true,
      msg: "Mail has been sent successfully!!",
    });
  } else {
    console.log({ user })
    res.status(400).json({
      success: false,
      msg: "User not found!!",
    });
  }
}

exports.resetPasswordUsingToken = async (req, res) => {
  try {
    const {
      newPassword,
    } = req.body;
    const authToken = req.headers.authorization?.split(' ');
    if (authToken?.length === 2) {
      const decodedToken = jwt.decode(authToken[1]);
      const user = await User.findById(decodedToken._id);
      user.password = newPassword;
      await user.save();
      res.status(200).json({
        success: true,
        msg: "Password Updaated Successfully!!",
      });
    } else {
      res.status(400).json({
        success: false,
        msg: "Invalid Token",
      });
    }
  } catch (error) {
    res.status(400).send("An error occured");
  }
};
