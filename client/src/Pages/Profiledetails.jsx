import React from 'react'
import Navebar from './Navebar'
import Footer from './Footer'

import ContNav from './ContNav'
import profile from '../assets/images/EXPLORE4.jpg'
import city from '../assets/images/profilesdetails/city.png'
import age from '../assets/images/profilesdetails/age.png'


function Profiledetails() {


    return (
        <>
            {/* navbar */}
            <ContNav />
            <Navebar />

            {/* main */}
            <div className=''>
                <div className="mx-auto  grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2  max-w-7xl lg:gap-10   justify-between gap-4   p-10 ">
                    <div className=' object-cover '>
                        <img src={profile} alt="" className=' rounded-xl shadow-xl' />
                    </div>
                    <div>
                        <div className='grid gap-3 grid-cols-1'>
                            <h1 className="font-bold text-3xl text-yellow-900 py-5 md:text-5xl lg:text-6xl font-heading">
                                Angelina Jolie
                            </h1>

                            <div className='flex gap-2'>
                                <button className='btn-views text-sm lg:text-md'>100views</button>
                                <button className='btn-available text-sm lg:text-md'>avilable online</button>
                            </div>


                            <div className='grid grid-cols-2 sm:grid-cols-2 gap-2 mt-3 lg:grid-cols-4 md:grid-cols-2'>
                                <div>
                                    <div className='flex flex-col p-2 text-yellow-900 border border-1/2 border-yellow-900 rounded justify-center gap-1 items-center'>
                                        <img src={city} alt="" className='object-cover rounded-xl w-14 h-14 shadow-xl' />
                                        <h1 className='font-light'>City:</h1>

                                        <h1 className="font-medium text-xs sm:text-sm   md:text-sm lg:text-md ">
                                            Angelina Jolie
                                        </h1>
                                    </div></div>
                                <div>
                                    <div className='flex flex-col p-2 text-yellow-900 border border-1/2 border-yellow-900 rounded justify-center gap-1 items-center'>
                                        <img src={age} alt="" className='object-cover rounded-xl w-14 h-14 shadow-xl' />
                                        <h1 className='font-light'>Age:</h1>

                                        <h1 className="font-medium text-xs sm:text-sm   md:text-sm lg:text-md ">
                                            25
                                        </h1>
                                    </div>
                                </div><div>
                                    <div className='flex flex-col p-2 text-yellow-900 border border-1/2 border-yellow-900 rounded justify-center gap-1 items-center'>
                                        <img src={city} alt="" className='object-cover rounded-xl w-14 h-14 shadow-xl' />
                                        <h1 className='font-light'>height:</h1>

                                        <h1 className="font-medium text-xs sm:text-sm   md:text-sm lg:text-md ">
                                            5.6
                                        </h1>
                                    </div>
                                </div><div>
                                    <div className='flex flex-col p-2 text-yellow-900 border border-1/2 border-yellow-900 rounded justify-center gap-1 items-center'>
                                        <img src={city} alt="" className='object-cover rounded-xl w-14 h-14 shadow-xl' />
                                        <h1 className='font-light'>Job:</h1>

                                        <h1 className="font-medium text-xs sm:text-sm   md:text-sm lg:text-md ">
                                            Developer
                                        </h1>
                                    </div>
                                </div>

                            </div>

                            <div>
                                <h1 className="font-bold text-sm text-yellow-900 py-2 md:text-lg lg:text-xl font-heading">
                                    ABOUT
                                </h1>
                                <p className=' text-xs sm:text-sm  text-yellow-900  md:text-sm lg:text-md '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>

                            </div>

                            <div>
                                <h1 className="font-bold text-sm text-yellow-900 py-2 md:text-lg lg:text-xl font-heading">
                                    Personal Info
                                </h1>
                                <p className=' text-xs sm:text-sm  text-yellow-900  md:text-sm lg:text-md '>
                                    <ul className='grid grid-cols-2'>
                                       <li> Name: Angelina Jolie</li>
                                       <li> Fatheres name: John smith
                                       </li><li>Age: 24
                                       </li><li>Date of birth:13 Oct 1999
                                       </li><li>Height:167cm
                                       </li><li>Weight:65kg
                                       </li><li> Degree: MSC Computer Science</li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* footer */}
            <Footer />
        </>
    )
}

export default Profiledetails