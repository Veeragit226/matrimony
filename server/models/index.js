const mongoose = require ("mongoose");


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  password: { type: String, required: true },
  otp: { type: String },
  oldOtp: { type: String, required: false },
  otpExpiry: { type: Date, required: false },
  oldOtpExpiry: { type: Date, required: false },}, { minimize: false }); 


const userModel = mongoose.models.user || mongoose.model("user", userSchema);

 module.exports = userModel;