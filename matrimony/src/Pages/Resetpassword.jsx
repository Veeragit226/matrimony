import React, { useState } from 'react'
import Navebar from './Navebar'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import ContNav from './ContNav'
import axios from 'axios'

function Resetpassword() {
<<<<<<< HEAD


    const [formData, setFormData] = useState({ email:"",resetpassword: "" });
=======
    
    const [formData, setFormData] = useState({ email:"", password: "", otp:"" });
>>>>>>> b076481ea3964246d4026f80586c64073d5fb605

    const navigate =useNavigate()
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
        const VerificationOtp = localStorage.getItem("token")
        console.log("verifyotp",VerificationOtp)
      e.preventDefault();
<<<<<<< HEAD
      try {
        const  data  = await axios.post('http://localhost:5000/api/resetpassword',formData);
        localStorage.getItem("token", data.otp);
=======
      try { 
        console.log("Verifing_TOken", formData.otp)
        const  data  = await axios.post(`http://localhost:5000/api/reset-password/${VerificationOtp}`, {
            // email:formData.email,
            // password:formData.password,
            otp:formData.otp
        });
        console.log("Data", )
        localStorage.setItem("token", data.otp);

         console.log('Response:', data);
        // alert("Logged in successfully");
>>>>>>> b076481ea3964246d4026f80586c64073d5fb605
        navigate('/login')
      } catch (error) {
        console.error("Error logging in:", error);
        alert(error)
        console.log(formData)
      }
    }
    return (
        <>


            {/* navbar */}
            <ContNav />
            <Navebar />



            {/* main */}
            <div className=''>
                <div className="mx-auto grid grid-cols-1  max-w-xl   justify-between gap-4  items-center p-10 ">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-9 items-center shadow-xl rounded-xl overflow-hidden">

                       

                        {/* Right Section (Form) */}
                        <form onSubmit={handleSubmit} className="w-full py-6 px-6 sm:px-16">

                            <div className=" text-yellow-900 text-center mb-6 font-medium text-3xl ">
                                <h2 > Reset Password</h2>
                               
                                
                            </div>
                            <div className="space-y-6">


                                {/* Email Field */}
                                <div>
                                    
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="resetpassword"
                                            type="password"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter new Password"
                                        />

                                    </div>
                                </div>
                                {/* Password */}
                               


                            </div>
                            {/* Submit Button */}
                            <div className='justify-center grid'>
                            <div className="!mt-6 ">
                                
                                <button
                                    type="submit"
                                    className="w-full max-w-[10rem]  py-2 px-3 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                                >
                                    Submit
                                </button>
                                
                            </div>
                            </div>




                        </form>
                    </div>
                </div>
            </div>


            {/* footer */}
            <Footer />
        </>
    )
}

export default Resetpassword