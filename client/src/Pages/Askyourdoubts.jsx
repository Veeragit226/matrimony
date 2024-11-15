import React from 'react'
import Navebar from './Navebar'
import Footer from './Footer'
import Asyk from '../assets/images/askyourdoubts/image.png'
import { Textarea } from '@headlessui/react'
import { Link } from 'react-router-dom'
import ContNav from './ContNav'

function Askyourdoubts() {
  return (
    <>
 
   
    {/* navbar */}
<ContNav/>
    <Navebar/>



    {/* main */}
    <div className=''>
    <div className="mx-auto grid grid-cols-1  max-w-5xl   justify-between gap-4  items-center p-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-9 items-center shadow-xl rounded-xl overflow-hidden">
          
          {/* Left Section (Text) */}
          <div className="flex flex-col justify-center text-start space-y-8 md:space-y-12 bg-gradient-to-r from-[#f2d184] to-[#ffeeb2] px-6 py-4  min-h-full text-center">
          
          <h1 className='text-[#c48c46] text-balance text-xl tracking-wide md:text-lg lg:text-2xl  sm:text-lg'>Now
           <span className='block  text-[#66451c] text-balance text-3xl font-semibold tracking-wide md:text-4xl lg:text-5xl lg:py-5  sm:text-3xl' >Find Your Life Partner </span> <span className='text-[#66451c]'>Easy and fast.</span> </h1>
           

         
            <div className=''>
            <img  src={Asyk}  alt=""  className='hidden md:block lg:block lg:w-full sm:w-40 rounded-full bg-[#fee68b]'/>
            </div>
            <div className='flex object-cover  animate-pulse  h-20 bottom-bg items-end'>
                       
                    </div>
          </div>

          {/* Right Section (Form) */}
          <form className="bg-[#fffff] md:col-span-2 w-full py-6 px-6 sm:px-16">

            <div className=" text-gray-700 mb-6 text-2xl font-extralight">
              <h2 className='text-amber-950 text-[15px]'>𝗦𝗘𝗡𝗗 𝗔𝗡𝗗 𝗘𝗡𝗤𝗨𝗜𝗥𝗬</h2>
            𝐀𝐬𝐤 𝐲𝐨𝐮𝐫 𝐝𝐨𝐮𝐛𝐭𝐬
            <h2 className='text-amber-950 text-[15px] font-medium'>Already a member? <a className='text-blue-500' href=""><Link to={'/login'}>Login</Link></a></h2>
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

    
    {/* footer */}
    <Footer/>
    </>
  )
}

export default Askyourdoubts