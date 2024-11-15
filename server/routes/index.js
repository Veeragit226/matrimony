const express = require('express');
const { loginUser,registerUser,forgotPassword, verifyOtp, resetPassword } = require ('../controller/usercontroller');
const userRouter = express.Router();

<<<<<<< HEAD
userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.post('/forgotpassword', forgotPassword);
userRouter.post('/verifyotp', verifyOtp);
userRouter.post('/resetpassword', resetPassword);
=======
const verifyToken = require('../middleware');
const router = express.Router()

const { signup, login, resetpassword, resetPasswordToken, getUsers, getuserbyid } = require('../controller/usercontroller');


// router.get('/test', (req,res)=>
// res.json({message: "Api Testing successfully"}));

router.post('/signup',signup)
router.post('/login',login)
router.post('/resetpassword',resetpassword)
router.post('/reset-password/:token',resetPasswordToken)
router.get('/getUser',getUsers)
router.get('/getuserbyid/:id',getuserbyid)

router.get('/data',verifyToken,(req,res)=>{
    res.json({message: `welcome,${req.user.email}! this is protected data`})
});



module.exports = router
>>>>>>> b076481ea3964246d4026f80586c64073d5fb605

module.exports=userRouter;