import React, { useState } from 'react'

import Trust from '../assets/images/whychoose/Why2.png'
import phone from '../assets/images/aboutus/telephone.png'
import Navebar from './Navebar'
import Footer from './Footer'

import '../assets/css/aboutus.css'

import { IconButton } from "@material-tailwind/react";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import MeetOurteam from './SubPages/MeetOurteam'


import Asyk from '../assets/images/askyourdoubts/image.png'
import { Textarea } from '@headlessui/react'
import { Link } from 'react-router-dom'
import ContNav from './ContNav'

function Contactus() {
    // State to manage which FAQ is open
    const [openFaq, setOpenFaq] = useState(null);

    // Toggle function for FAQ answers
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    return (
        <>
        <ContNav/>
            <Navebar />
            <div className='bg sm:bg-hidden'>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">

                    <div className="text-center  tracking-wide text-balance pb-12">
                        <h2 className="text-base font-bold text-yellow-300 ">
                            We are here to assist you.
                        </h2>
                        <h1 className="font-bold text-3xl py-5 md:text-5xl lg:text-6xl font-heading text-bg">
                            Contact Us
                        </h1>
                        <h2 className="text-base text-white ">
                            Most Trusted and premium Matrimony Service in the World.
                        </h2>
                    </div>
                    <div className="grid items-center justify-center grid-cols-1  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">

                        <div className="w-full  shadow-md hover:shadow-2xl bg-white rounded-lg px-7  py-7 flex  flex-wrap flex-col justify-center items-center">
                            {/* <div className="mb-8">
                                <img
                                    className="object-center object-cover rounded-full h-12 w-12"
                                    src={Genune}
                                    alt="photo"
                                />
                            </div> */}
                            <div className="text-yellow-900">
                                <p className="text-lg text-blue-700 font-bold mb-2">OUR OFFICE</p>
                                <p className="text-sm  font-normal"> Most Trusted and premium Matrimony Service in the World.</p>
                                <div className='flex gap-5 items-center'><a href="#buttons-with-link">
                                    <IconButton variant="outlined">
                                    <IoCall />
                                    </IconButton>
                                    
                                </a>
                                <h1>+92 (8800) 68 - 8960</h1>
                                </div>
                                <div className='flex gap-5 items-center'><a href="#buttons-with-link">
                                    <IconButton variant="outlined">
                                    <IoMail/>
                                    </IconButton>
                                    
                                </a>
                                <h1>WhyGlobalmatrimony@gmail.com</h1>
                                </div>
                                <div className='flex gap-5 items-center'><a href="#buttons-with-link">
                                    <IconButton variant="outlined">
                                    <IoLocation/>
                                    </IconButton>
                                    
                                </a>
                                <h1>Egmore,Chennai</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full  shadow-md hover:shadow-2xl bg-white rounded-lg px-7  py-7 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img
                                    className="object-center object-cover rounded-full h-20 w-20"
                                    src={Trust}
                                    alt="photo"
                                />
                            </div>
                            <div className="text-center text-yellow-900">
                                <p className="text-lg font-bold mb-2">Most Trusted</p>
                                <p className="text-sm font-normal">The most trusted wedding matrimony brand lorem</p>
                                <button className='btn-support mt-2'>GET SUPPORT</button>
                            </div>
                        </div>
                        <div className="w-full  shadow-md  hover:shadow-2xl bg-white rounded-lg px-7  py-7 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img
                                    className="object-center object-cover rounded-full h-20 w-20"
                                    src={phone}
                                    alt="photo"
                                />
                            </div>
                            <div className="text-center text-yellow-900">
                                <p className="text-lg font-bold mb-2">2000+ weddings
                                </p>
                                <p className="text-sm  font-normal"> Lakhs of peoples have found their life partner lorem</p>
                                <button className='btn-support mt-2'>GET SUPPORT</button>
                            </div>
                        </div>

                    </div>
                </section>

            </div>



             {/* Contact form */}
    <div className=''>
    <div className="mx-auto grid grid-cols-1  max-w-5xl   justify-between gap-4  items-center p-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-9 items-center shadow-xl rounded-xl overflow-hidden">
          
          {/* Left Section (Text) */}
          <div className="flex flex-col justify-center text-start space-y-8 md:space-y-12 bg-gradient-to-r from-[#f2d184] to-[#ffeeb2] px-6 py-4  min-h-full text-center">
          
          <h1 className='text-[#c48c46] text-balance text-xl tracking-wide md:text-lg lg:text-2xl  sm:text-lg'>Now
           <span className='block  text-[#66451c] text-balance text-3xl font-semibold tracking-wide md:text-4xl lg:text-5xl lg:py-5  sm:text-3xl' >Contact to us</span> <span className='text-[#66451c]'>Easy and fast.</span> </h1>
           

         
            <div className=''>
            <img  src={Asyk}  alt=""  className='hidden md:block lg:block lg:w-full sm:w-40 rounded-full bg-[#fee68b]'/>
            </div>
            <div className='flex object-cover  animate-pulse  h-20 bottom-bg items-end'>
                       
                    </div>
          </div>

          {/* Right Section (Form) */}
          <form className="bg-[#fffff] md:col-span-2 w-full py-6 px-6 sm:px-16">

            <div className=" text-gray-900 mb-6 font-medium text-3xl">
            <h2 className=' font-light text-[15px]'>Lets Talk</h2>
            Send Your Enquiry
            
            </div>
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Name:</label>
                <div className="relative flex items-center">
                  <input
                    name="name"
                    type="text"
                    required
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter name"
                  />
                  
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email Id:</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter email"
                  />
                  
                </div>
              </div>


              {/* Phone number */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Phone Number:</label>
                <div className="relative flex items-center">
                  <input
                    name="Phone number"
                    type="number"
                    required
                    className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter Your Number"
                  />
                  
                </div>
              </div>

              {/* message */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Message:</label>
                <div className="relative flex items-center">
                  <Textarea
                    name="Message"
                    type="text"
                    required
                    className="text-gray-800 bg-white border border-gray-300 w-full lg:h-[10rem] text-sm px-4 py-2.5 rounded-md outline-blue-500"
                    placeholder="Enter Your Number"
                  />
                  
                </div>
              </div>

            

            
            </div>

            {/* Submit Button */}
            <div className="!mt-12">
              <button
                type="button"
                className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
              >
                Send Enquiry
              </button>
            </div>

          
          </form>
        </div>
      </div>
      </div>

            



            {/* Meet out team */}
            <MeetOurteam />





            <Footer />
        </>
    )
}

export default Contactus