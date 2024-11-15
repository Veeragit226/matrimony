const generateOtp = (length = 6) => {
    let otp = '';

    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    
    const otpExpiry = Date.now() + 10 * 60 * 1000;
    
    return { otp, otpExpiry }; 
  };
module.exports =generateOtp