const express = require('express');
const { loginUser,registerUser,forgotPassword, verifyOtp, resetPassword } = require ('../controller/usercontroller');
const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.post('/forgotpassword', forgotPassword);
userRouter.post('/verifyotp', verifyOtp);
userRouter.post('/resetpassword', resetPassword);

module.exports=userRouter;