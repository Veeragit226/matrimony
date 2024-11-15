const jwt = require ("jsonwebtoken");
const bcrypt = require ("bcrypt");
const validator = require("validator");
const userModel = require("../models/index.js");
const sendOtpEmail = require('../Service/emailservice.js');
const generateOtp = require('../Service/otpgenerator.js');

<<<<<<< HEAD
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
=======
const User =require('../models/index')
const Profile =require('../models/profiles')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils/index');


const nodemailer = require('nodemailer')



//signup
const signup=async(req,res)=>{
    const { 
        name,
        age,
        email, 
        phone,
        caste,
        dob,
        state,
        district,
        height,
        weight,
        education,
        working,
        password,
        description,
        gender }=req.body;

    const user = await User.findOne({email});

    if(!user){ 

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name,
            age,
            email, 
            phone,
            caste,
            dob,
            state,
            district,
            height,
            weight,
            education,
            working,
            password:hashedPassword,
            description,
            gender});
        await newUser.save();
        return res.status(201).json({message: "User created successfully"})
    }

    res.status(404).json({message: 'user already exists'})
};


//login
const login=async(req,res)=>{
    const { email, password } = req.body;
    const user = await User.findOne({email});
    // res.satatus(201).json({message:'login successfully'})

    if(!user){
        return res.status(404).json({message: 'User not found'})}

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(401).json({message: 'Invalid password'})}

    const token = generateToken(user);
    res.json({token});
};



const resetpassword=async (req,res)=>{
    const { email } = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({message: 'User not found'})}

        const token = Math.random().toString(36).slice(-8)
        user.resetPasswordToken = token
        user.resetPasswordExpires = Date.now() + 3600000 // 1 hour from now
        await user.save()

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "bharathmk333@gmail.com",
                pass: "wftldxymjturgsjo"
            },
        })

        const message = {
            from: "bharathmk333@gmail.com",
            to: user.email,
            subject: "Reset Password",
            text: `You can reset your password here: ${token}`}

            transporter.sendMail(message, (err, info)=>{
                if(err){
                     res.status(404).json({message: 'Error sending email'})}
                     res.status(200).json({message: 'password reset email send'+ info.response})
            })

};


const resetPasswordToken=async(req,res)=>{
    const {token} = req.params;
    const {password} = req.body;


    const user = await User.findOne({
        resetPasswordToken: token, 
        resetPasswordExpires: { $gt: Date.now()}});
>>>>>>> b076481ea3964246d4026f80586c64073d5fb605

        if(!user){
            return res.json({success:false,message: "User does not exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.json({success:false,message: "Invalid Data"})
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

<<<<<<< HEAD
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
=======
const getUsers = async(req,res,next)=>{
    User.find()
    .then(Users => res.json(Users))
    .catch(err => res.json(err))
}



const getuserbyid = async (req, res,next) => {
    console.log(req.params.id)
  User.findById(req.params.id)
  .then(user=>{
    res.status(200).json({
        users:user
    })
   
  })
   .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
}

module.exports={signup,login,resetpassword,resetPasswordToken,getUsers,getuserbyid}
>>>>>>> b076481ea3964246d4026f80586c64073d5fb605
