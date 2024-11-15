const express = require('express');
const { loginUser,registerUser,forgotPassword, verifyOtp, resetPassword } = require ('../controller/usercontroller');
const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post('/forgotpassword', forgotPassword);
router.post('/verifyotp', verifyOtp);
router.post('/resetpassword', resetPassword);


module.exports = router