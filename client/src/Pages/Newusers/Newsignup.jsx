import React, { useState } from 'react'

import Footer from '../Footer'
import Asyk from '../../assets/images/askyourdoubts/image.png'

import { Link, Navigate, useNavigate } from 'react-router-dom'

import axios from 'axios'
import Dnav from '../Dummylandingpage/Dnav'



function Newsignup() {

    const [formData, setFormData] = useState([
        {
            name: "",
            email: "",
            password: ""
        }]);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/register", formData);
            alert("Registered successfully");
            navigate('/newlogin')
        } catch (error) {
            console.error("Error registering:", error);
            alert("email already exists",error)
        }
    };



    return (
        <>
            {/* navbar */}
           <Dnav/>



            {/* main */}
            <div className=''>
                <div className="mx-auto grid grid-cols-1  max-w-4xl   justify-between gap-4  items-center p-10 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-9 items-center shadow-xl rounded-xl overflow-hidden">

                        {/* Left Section (Text) */}
                        <div className="flex flex-col justify-between text-start space-y-8 md:space-y-12 bg-gradient-to-r from-[#f2d184] to-[#ffeeb2] px-6 py-4  min-h-full text-center">

                            <h1 className='text-[#c48c46] text-balance text-xl tracking-wide md:text-lg lg:text-2xl  sm:text-lg'>Now
                                <span className='block  text-[#66451c] text-balance text-3xl font-semibold tracking-wide md:text-4xl lg:text-4xl lg:py-5  sm:text-3xl' >Find Your Life Partner </span> <span className='text-[#66451c]'>Easy and fast.</span> </h1>

<div>
                            <div className=''>
                                <img src={Asyk} alt="" className='hidden md:block lg:block lg:w-full sm:w-40 rounded-full bg-[#fee68b]' />
                            </div>

                            <div className='flex object-cover  animate-pulse  h-20 bottom-bg items-end'>

                            </div>
                            </div>
                        </div>

                        {/* Right Section (Form) */}
                        <form onSubmit={handleSubmit} className=" md:col-span-2 w-full py-6 px-6 sm:px-16">

                            <div className=" text-gray-900 mb-6 font-medium text-3xl ">
                                <h2 className=' font-light text-[15px]'>Start for free</h2>
                                Sign up to Matrimony
                                <h2 className='text-amber-950 text-[15px] font-medium'>Already have a Member? <a className='text-blue-500' href="Login"><Link to={'/newlogin'}> Login Now </Link></a></h2>
                            </div>
                            <div className="space-y-6">


                                {/* Name Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Name:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="name"
                                            type="text"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Name"
                                        />

                                    </div>
                                </div>
                               
                                {/* Email Field */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Email Id:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="email"
                                            type="email"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter email"
                                        />

                                    </div>
                                </div>

                               
                                {/* Password */}
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Password:</label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="password"
                                            type="password"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500 "
                                            placeholder="Enter your password"

                                        />

                                    </div>
                                </div>


                                {/* Remember me */}
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                        Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.

                                    </label>
                                </div>





                            </div>

                            {/* Submit Button */}
                            <div className="!mt-12">
                                <button

                                    type="submit"
                                    className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                                >
                                    Create Account
                                </button>
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

export default Newsignup