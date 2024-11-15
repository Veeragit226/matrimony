import React from 'react'
import Navebar from './Navebar'
import Footer from './Footer'
import herosec from '../assets/images/allprofile.jpg'

import { FaRegBell, FaRegClock, FaRegHeart, FaSearch, FaShieldAlt } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineLike } from "react-icons/ai";


import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from "@material-tailwind/react";
import image from '../assets/images/userDashboard/1.jpg'
import image2 from '../assets/images/userDashboard/2.jpg'
import image3 from '../assets/images/userDashboard/3.jpg'
import image4 from '../assets/images/userDashboard/13.jpg'
import image5 from '../assets/images/userDashboard/14.jpg'
import image6 from '../assets/images/userDashboard/16.jpg'
import ContNav from './ContNav';
import { Link } from 'react-router-dom';

function Allprofiles() {

    const newrequest = [
        { name: 'Rashma', course: 'B.sc', proffession: 'IT', Age: '25 Years Old', Height: '5.6', intrest: 'Send Intrest', details: 'More Details', src: image, alt: "image1" },
        { name: 'Rashma', course: 'B.sc', proffession: 'IT', Age: '25 Years Old', Height: '5.6', intrest: 'Send Intrest', details: 'More Details', src: image2, alt: "image2" },
        { name: 'Rashma', course: 'B.sc', proffession: 'IT', Age: '25 Years Old', Height: '5.6', intrest: 'Send Intrest', details: 'More Details', src: image3, alt: "image3" },
        { name: 'Rashma', course: 'B.sc', proffession: 'IT', Age: '25 Years Old', Height: '5.6', intrest: 'Send Intrest', details: 'More Details', src: image4, alt: "image4" },
        { name: 'Rashma', course: 'B.sc', proffession: 'IT', Age: '25 Years Old', Height: '5.6', intrest: 'Send Intrest', details: 'More Details', src: image5, alt: "image5" },
        { name: 'Rashma', course: 'B.sc', proffession: 'IT', Age: '25 Years Old', Height: '5.6', intrest: 'Send Intrest', details: 'More Details', src: image6, alt: "image6" },


    ]



    
    return (
        <>
            {/* navbar */}
            <ContNav />
            <Navebar />



            {/* profile hero section */}
            <div className='bg-[#fefbf1]'>
                <div className="relative bg-gradient-to-r from-purple-600 to-blue-600  p-10 text-white overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={herosec}
                            alt="Background Image"
                            className="object-cover object-top w-full h-full"
                        />
                        <div className="absolute inset-0 bg-[#870f44] opacity-50" />
                    </div>
                    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                        <h1 className="text-5xl font-bold leading-tight mb-4">
                            Lakhs of Happy Marriages
                        </h1>

                        <Link to={'/plan'} className=" text-white border border-white backdrop-blur-xl  py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"> <a
                            href="#"

                        >

                            Join Now For Free
                        </a></Link>
                    </div>
                </div>

                {/* filter */}
                <section className="max-w-7xl grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div>
                        <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700  p-4  drop-shadow-md shadow-blue-gray-900/5">


                            <div>
                                <form action="" className='flex flex-col text-yellow-900  justify-around gap-3 flex-wrap'>
                                    <div className='flex gap-3'>
                                        <div className="border  border-yellow-900 text-pink-900 p-1 rounded">
                                            <FaSearch />
                                        </div>
                                        <label htmlFor="" className='font-medium text-pink-900'>I'M Looking for</label>
                                    </div>
                                    <select name="Gender" id="" className=' rounded border border-pink-900 py-2 px-1'>
                                        <optgroup className='px-5'>
                                            <option value="">I'M Looking for</option>
                                            <option value="">Men</option>
                                            <option value="">Women</option>
                                        </optgroup>

                                    </select>
                                    <div className='flex gap-3'>
                                        <div className="border  border-yellow-900 text-pink-900 p-1 rounded">
                                            <FaRegClock />
                                        </div>
                                        <label htmlFor="" className='font-medium text-pink-900'>Age</label>
                                    </div>
                                    <select name="Age" id="" className='border border-pink-900 rounded py-2 px-1'>
                                        <optgroup className='px-10'>
                                            <option value="">Age</option>
                                            <option value="">18 to 30</option>
                                            <option value="">31 to 40</option>
                                            <option value="">41 to 50</option>
                                            <option value="">51 to 60</option>
                                        </optgroup>
                                    </select>
                                    <div className='flex gap-3'>
                                        <div className="border  border-yellow-900 text-pink-900 p-1 rounded">
                                            <FaRegBell />
                                        </div>
                                        <label htmlFor="" className='font-medium text-pink-900'>Religion</label>
                                    </div>
                                    <select name="Religian" id="" className='border border-pink-900 rounded py-2 px-1'>
                                        <optgroup className='px-10'>
                                            <option value="">Religion</option>
                                            <option value="">Hindu</option>
                                            <option value="">Muslim</option>
                                            <option value="">Cristian</option>
                                        </optgroup>
                                    </select>
                                    <div className='flex gap-3'>
                                        <div className="border  border-yellow-900 text-pink-900 p-1 rounded">
                                            <IoLocationOutline />
                                        </div>
                                        <label htmlFor="" className='font-medium text-pink-900'>Location</label>
                                    </div>
                                    <select name="Location" id="" className='border border-pink-900 rounded py-2 px-1'>
                                        <optgroup className='px-10'>
                                            <option value="">Any Location</option>
                                            <option value="">Chennai</option>
                                            <option value="">Trichy</option>
                                            <option value="">Coimpature</option>
                                            <option value="">Madhurai</option>
                                            <option value="">Dindukal</option>
                                            <option value="">Viruthachalam</option>
                                        </optgroup>
                                    </select>

                                    <div className='flex gap-3'>
                                        <div className="border  border-yellow-900 text-pink-900 p-1 rounded">
                                            <AiOutlineLike />
                                        </div>
                                        <label htmlFor="" className='font-medium text-pink-900'>Availability</label>
                                    </div>
                                    <div className='ps-3 accent-gray-900'>
                                        <div className='flex gap-5 '>
                                            <input type="radio" id='all' checked name='avail' />
                                            <label htmlFor="all" className='font-light'>All</label>
                                        </div>
                                        <div className='flex gap-5'>
                                            <input type="radio" id='availavble' name='avail' />
                                            <label htmlFor="can" className='font-light'>Available</label>
                                        </div>
                                        <div className='flex gap-5'>
                                            <input type="radio" id='offline' name='avail' />
                                            <label htmlFor="offline" className='font-light'>Offline</label>
                                        </div>
                                    </div>




                                    <div className='flex gap-3'>
                                        <div className="border  border-yellow-900 text-pink-900 p-1 rounded">
                                            <FaShieldAlt />
                                        </div>
                                        <label htmlFor="" className='font-medium text-pink-900'>Profile</label>
                                    </div>

                                    <div className='ps-3 accent-gray-900'>
                                        <div className='flex gap-5 '>
                                            <input type="radio" id='alls' checked name='profile' />
                                            <label htmlFor="alls" className='font-light'>All</label>
                                        </div>
                                        <div className='flex gap-5'>
                                            <input type="radio" id='premium' name='profile' />
                                            <label htmlFor="premium" className='font-light'>premium</label>
                                        </div>
                                        <div className='flex gap-5'>
                                            <input type="radio" id='free' name='profile' />
                                            <label htmlFor="free" className='font-light'>Free</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 md:col-span-1'>
                        <>
                            <h1 className='lg:text-xl'>Showing Profiles</h1>

                            {newrequest.map((tab) => {
                                const { name, course, proffession, Age, Height, intrest, details, src, alt } = tab;
                                return (
                                    <>
                                        <Card className='w-full p-2 my-5 shadow transition-all hover:shadow-xl  max-w-9xl grid text-yellow-900 justify-center text-start grid-cols-1 md:grid-cols-4 sm:grid-cols-1  lg:grid-cols-4'>
                                            <CardHeader className='bg-yellow-900 max-w-xl ' >
                                                <img key={name} src={src} alt={alt} className='object-cover transition-all hover:scale-110  h-full' />

                                            </CardHeader>
                                            <CardBody className=' cols-grow col-span-2'>
                                                <h1 className='font-medium lg:text-3xl'>{name}</h1>
                                                <div className='flex  gap-1 flex-wrap'>
                                                    <h1 class="rounded-md 
                        bg-[#718fa0]
                         mt-3 text-white 
                         py-1 px-2.5 border 
                         border-gray-300 
                         text-center text-sm
                          text-white transition-all
                           shadow-sm hover:shadow 
                            active:shadow-none 
                            disabled:pointer-events-none
                             disabled:opacity-50 
                             disabled:shadow-none">{course}</h1>
                                                    <h1 class="rounded-md 
                        bg-[#718fa0]
                         mt-3 text-white 
                         py-1 px-2.5 border 
                         border-gray-300 
                         text-center text-sm
                          text-white transition-all
                           shadow-sm hover:shadow 
                            active:shadow-none 
                            disabled:pointer-events-none
                             disabled:opacity-50 
                             disabled:shadow-none">{proffession}</h1>
                                                    <h1 class="rounded-md 
                         bg-[#718fa0]
                         mt-3 text-white 
                         py-1 px-2.5 border 
                         border-gray-300 
                         text-center text-sm
                          text-white transition-all
                           shadow-sm hover:shadow 
                            active:shadow-none 
                            disabled:pointer-events-none
                             disabled:opacity-50 
                             disabled:shadow-none">{Age}</h1>
                                                    <h1 class="rounded-md 
                        bg-[#718fa0]
                         mt-3 text-white 
                         py-1 px-2.5 border 
                         border-gray-300 
                         text-center text-sm
                          text-white transition-all
                           shadow-sm hover:shadow 
                            active:shadow-none 
                            disabled:pointer-events-none
                             disabled:opacity-50 
                             disabled:shadow-none">{Height}</h1>

                                                    <h1 class="rounded-md 
                         bg-[#718fa0]
                         mt-3 text-white
                         py-1 px-2.5 border 
                         border-gray-300 
                         text-center text-sm
                          text-white transition-all
                           shadow-sm hover:shadow 
                            active:shadow-none 
                            disabled:pointer-events-none
                             disabled:opacity-50 
                             disabled:shadow-none">{details}</h1>

                                                </div>
                                                <button class="btn-support mt-4">{intrest}</button>


                                            </CardBody>
                                            <CardFooter className='col-span-1 text-sm font-light'>
                                                <div className='flex flex-wrap justify-end gap-2'>
                                                    <div className="btn-support">
                                                        <FaRegHeart />
                                                    </div>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </>
                                )
                            }

                            )}

                        </>
                    </div>
                </section>




                {/* Footer */}
                <Footer />
            </div> </>
    )
}

export default Allprofiles