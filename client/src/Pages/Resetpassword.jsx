import React, { useState } from 'react';
import Navebar from './Navebar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import ContNav from './ContNav';
import axios from 'axios';

function Resetpassword() {
    const [formData, setFormData] = useState({ email: "", newpassword: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        
            console.log("Form Data:", formData);

           
            const response = await axios.post("http://localhost:5000/api/resetpassword", formData);
            console.log("Response Data:", response.data);

            
            if (response.data.success) {
                navigate('/login');
            } else {
                alert(response.data.message); 
            }
        } catch (error) {
            console.error("Error during password reset:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <>
            {/* navbar */}
            <ContNav />
            <Navebar />

            {/* main */}
            <div className=''>
                <div className="mx-auto grid grid-cols-1 max-w-xl justify-between gap-4 items-center p-10">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-9 items-center shadow-xl rounded-xl overflow-hidden">
                        {/* Right Section (Form) */}
                        <form onSubmit={handleSubmit} className="w-full py-6 px-6 sm:px-16">
                            <div className="text-yellow-900 text-center mb-6 font-medium text-3xl">
                                <h2>Reset Password</h2>
                            </div>
                            <div className="space-y-6">
                                {/* Email Field */}
                                <div>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="email"
                                            type="email"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                
                                {/* New Password Field */}
                                <div>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={handleChange}
                                            name="newpassword"
                                            type="password"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter new Password"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className='justify-center grid'>
                                <div className="!mt-6">
                                    <button
                                        type="submit"
                                        className="w-full max-w-[10rem] py-2 px-3 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
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
    );
}

export default Resetpassword;
