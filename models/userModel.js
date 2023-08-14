const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must have a name"],
  },
  email: {
    type: String,
    unique: [true, "email already in use"],
    lowercase: true,
    required: [true, "email already in use"],
  },
  photo: {
    select: false, //do not select this in query
    default: "default.jpg",
  },
  password: {
    select: false,
    type: String,
    required: [true, "password is required"],
    minlength: 8,
  },
  passwodConfirm: {
    type: String,
    required: [true, "please confirm password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "both passwords are not same",
    },
  },
  PasswordChangedAt: { type: Date },
  role: {
    type: String,
    enum: ["buyer", "seller", "admin"],
    default: "buyer",
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});
const User = mongoose.model("user", userSchema);
module.exports = User;
