var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");
const Joi = require("joi");

var UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  batch: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
  },
  depositCredited: {
    type: Boolean,
    default: false,
    required: false,
  },
  registrationDate: {
    type: Date,
    required: false,
  },
  mealPreference: {
    type: String,
    required: false,
  },
  allergy: {
    type: String,
    required: false,
  },
  isRegistered: {
    type: Boolean,
    default: false,
    required: false,
  },
  scavengerHunt: {
    type: {
      name: {
        type: String,
        required: false,
      },
      cohort: {
        type: String,
        required: false,
      },
      isPayment: {
        type: Boolean,
        default: false,
        required: false,
      }
    },
    required: false,
  },
  AgreementSigned: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre("save", function (next) {
  var user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

const User = mongoose.model("User", UserSchema);

const validate = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    password: Joi.string().min(6).required(),
    country: Joi.string().required(),
    phonenumber: Joi.string().required(),
    address: Joi.string().required(),
    email: Joi.string().email().required(),
  });
  return schema.validate(user);
};

module.exports = {
  User,
  validate,
};
