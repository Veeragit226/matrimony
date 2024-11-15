const jwt = require ("jsonwebtoken");
const bcrypt = require ("bcrypt");
const validator = require("validator");
const userModel = require("../models/index.js");
const sendOtpEmail = require('../Service/emailservice.js');
const generateOtp = require('../Service/otpgenerator.js');

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

const registerUser = async (req,res) => {
  const {name, email, password} = req.body;
  try{
      const exists = await userModel.findOne({email})
      if(exists){
          return res.json({success:false,message: "User already exists"})
      }

      if(!validator.isEmail(email)){
          return res.json({success:false,message: "Please enter a valid email"})
      }
      if(password.length<8){
          return res.json({success:false,message: "Please enter a strong password"})
      }

      const salt = await bcrypt.genSalt(10); 
      const hashedPassword = await bcrypt.hash(password, salt)

      const newUser = new userModel({name, email, password: hashedPassword})
      const user = await newUser.save()
      const token = createToken(user._id)
      res.json({success:true,token})

  } catch(error){
      console.log(error);
      res.json({success:false,message:"Error"})
  }
}

const loginUser = async (req,res) => {
  const {email, password} = req.body;
  try{
      const user = await userModel.findOne({email})

      if(!user){
          return res.json({success:false,message: "User does not exist"})
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if(!isMatch){
          return res.json({success:false,message: "Invalid credentials"})
      }

      const token = createToken(user._id)
      res.json({success:true,token})
  } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"})
  }
}


const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    const { otp, otpExpiry } = generateOtp();
    user.oldOtp = user.otp;
    user.oldOtpExpiry = user.otpExpiry;
    user.otp = otp;
    user.otpExpiry = otpExpiry;
    
    await user.save();
    await sendOtpEmail(email, otp);
    
    return res.json({
      success: true,
      message: 'OTP sent to your email.',
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: 'Error generating OTP or sending email',
    });
  }
};

  const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
  
    try {
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.json({ success: false, message: 'User not found' });
      }

      if (String(user.otp).trim() !== String(otp).trim()) {
        return res.json({ success: false, message: 'Invalid OTP' });
      }

      if (Date.now() > user.otpExpiry) {
        return res.json({ success: false, message: 'OTP has expired' });
      }

      user.otp = null;
      user.otpExpiry = null;
      await user.save();
  
      return res.json({
        success: true,
        message: 'OTP verified successfully, you can now reset your password'
      });
    } catch (error) {
      console.error(error);
      return res.json({ success: false, message: 'Error verifying OTP' });
    }
  };
  
const resetPassword = async (req, res) => {
  const { email, newpassword } = req.body;

  try {

    if (!email || !newpassword) {
      return res.json({ success: false, message: 'Email and new password are required' });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    const hashedPassword = await bcrypt.hash(newpassword, 10);

    user.password = hashedPassword;
    await user.save();

    res.json({ success: true, message: 'Password reset successful' });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'An error occurred while resetting the password' });
  }
};

module.exports= {loginUser, registerUser,forgotPassword,verifyOtp, resetPassword};
