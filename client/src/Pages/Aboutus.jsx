import React, { useState } from 'react'
import Genune from '../assets/images/whychoose/Why1.png'
import Trust from '../assets/images/whychoose/Why2.png'
import wedding from '../assets/images/whychoose/Why3.png'
import Navebar from './Navebar'
import Footer from './Footer'
import Welcometo from './SubPages/Welcometo'
import '../assets/css/aboutus.css'
// import '../../assets/css/whychoose.css'

import trust1 from '../assets/images/EXPLORE4.jpg'
import trust2 from '../assets/images/EXPLORE1.jpg'
import trust3 from '../assets/images/EXPLORE3.jpg'
import MeetOurteam from './SubPages/MeetOurteam'
import ContNav from './ContNav'

function Aboutus() {
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
                            #1 Matrimony
                        </h2>
                        <h1 className="font-bold text-3xl py-5 md:text-5xl lg:text-6xl font-heading text-bg">
                            About Us
                        </h1>
                        <h2 className="text-base text-white ">
                            Most Trusted and premium Matrimony Service in the World.
                        </h2>
                    </div>
                    <div className="grid items-center justify-center grid-cols-1  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">

                        <div className="w-full  shadow-md hover:shadow-2xl bg-white rounded-lg px-7  py-7 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img
                                    className="object-center object-cover rounded-full h-12 w-12"
                                    src={Genune}
                                    alt="photo"
                                />
                            </div>
                            <div className="text-center text-yellow-900">
                                <p className="text-lg  font-bold mb-2">Genuine profiles</p>
                                <p className="text-sm  font-normal">Contact genuine profiles with 100% verified mobile</p>
                            </div>
                        </div>
                        <div className="w-full  shadow-md hover:shadow-2xl bg-white rounded-lg px-7  py-7 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img
                                    className="object-center object-cover rounded-full h-12 w-12"
                                    src={Trust}
                                    alt="photo"
                                />
                            </div>
                            <div className="text-center text-yellow-900">
                                <p className="text-lg font-bold mb-2">Most Trusted</p>
                                <p className="text-sm font-normal">The most trusted wedding matrimony brand lorem</p>
                            </div>
                        </div>
                        <div className="w-full  shadow-md  hover:shadow-2xl bg-white rounded-lg px-7  py-7 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img
                                    className="object-center object-cover rounded-full h-12 w-12"
                                    src={wedding}
                                    alt="photo"
                                />
                            </div>
                            <div className="text-center text-yellow-900">
                                <p className="text-lg font-bold mb-2">2000+ weddings
                                </p>
                                <p className="text-sm  font-normal"> Lakhs of peoples have found their life partner lorem</p>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
            <Welcometo />


            {/* TRUSTED BRAND */}
            <div className=' bg-[#fcfcfc]'>
                <div className=" mx-auto max-w-7xl justify-center items-center  text-center  justify-between py-20 ">

                    <h1 className='text-red-400 text-balance text-4xl font-semibold tracking-wide pb-5  sm:text-5xl'>Customer <span className='text-blue-950'> Testimonials</span></h1>
                    <h1 className='text-[#c48c46] text-balance text-lg font-semibold tracking-widest pb-5  lg:text-md'>Fusce imperdiet ullamcorper fringilla</h1>


                    <div className='mx-auto max-w-7xl p-10  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center  justify-between gap-4 '>
                        <div class=" w-full p-7  rounded-lg bg-white shadow-sm hover:shadow-xl border border-slate-200 my-6">
                            <div class="flex items-center gap-4 text-slate-800">
                                <img src={trust1} class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
                                <div class="flex w-full flex-col">
                                    <div class="flex flex-wrap items-center justify-between">
                                        <h5 class="text-xl font-semibold text-slate-800">
                                            Angelina
                                        </h5>




                                        <div class="flex items-center   gap-0 5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>


                                    </div>

                                </div>
                            </div>
                            <div class="mt-6">
                                <p class="text-base text-justify text-slate-600 font-light leading-normal">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus accusantium quaerat veritatis, dolorum, nulla rerum deserunt, facere officia odio ea? Beatae quam accusamus dolore!
                                </p>
                            </div>
                        </div>




                        <div class=" w-full p-7  rounded-lg bg-white shadow-sm hover:shadow-xl  border border-slate-200 my-6">
                            <div class="flex items-center gap-4 text-slate-800">
                                <img src={trust2} class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
                                <div class="flex w-full flex-col">
                                    <div class="flex flex-wrap items-center justify-between">
                                        <h5 class="text-xl font-semibold text-slate-800">
                                            Riya
                                        </h5>




                                        <div class="flex items-center gap-0 5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="mt-6">
                                <p class="text-base text-justify text-slate-600 font-light leading-normal">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus accusantium quaerat veritatis, dolorum, nulla rerum deserunt, facere officia odio ea? Beatae quam accusamus dolore!
                                </p>
                            </div>
                        </div>



                        <div class=" w-full   rounded-lg bg-white shadow-sm hover:shadow-xl p-7 border border-slate-200 my-6">
                            <div class="flex items-center gap-4  text-slate-800">
                                <img src={trust3} class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
                                <div class="flex w-full flex-col">
                                    <div class="flex flex-wrap items-center justify-between">
                                        <h5 class="text-xl font-semibold text-slate-800">
                                            Jenis
                                        </h5>




                                        <div class="flex items-center gap-0 5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="mt-6">
                                <p class="text-base text-justify text-slate-600 font-light leading-normal">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus accusantium quaerat veritatis, dolorum, nulla rerum deserunt, facere officia odio ea? Beatae quam accusamus dolore!
                                </p>
                            </div>
                        </div>
                    </div>



                    <button class="btn-primary2">
                        More Customer Reviews
                    </button>
                </div>

            </div>

            {/* Meet out team */}
            <MeetOurteam />


            {/* faq */}

            <div className='bg-[#fffcf2] text-center  p-7'>
                <div className='max-w-7xl p-5 mx-auto'>

                    <h1 className='text-red-400 text-balance text-4xl font-semibold tracking-wide pb-5  sm:text-5xl'>KB<span className='text-blue-950'>KNOWLEDGE BASE</span></h1>
                    <h1 className='text-[#c48c46] text-balance text-lg font-semibold tracking-widest pb-5  lg:text-md'>Fusce imperdiet ullamcorper fringilla</h1>
                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 '>
                        <div className="fa bg-white p-5   shadow-xl">

                            <div className="space-y-6">
                                {/* FAQ 1 */}
                                <div className="fa1 border-b pb-4">
                                    <h1
                                        className="faq3 text-xl sm:text-2xl font-semibold cursor-pointer flex justify-between items-center"
                                        onClick={() => toggleFaq(1)}
                                    >
                                        How does a Matrimony website work?
                                        <span className={`faq4 ${openFaq === 1 ? 'rotate-45' : ''}`}>&#43;</span>
                                    </h1>
                                    {openFaq === 1 && (
                                        <p className="faq4 text-gray-600 mt-4 text-sm sm:text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    )}
                                </div>

                                {/* FAQ 2 */}
                                <div className="fa2 border-b pb-4">
                                    <h1
                                        className="faq5 text-xl sm:text-2xl font-semibold cursor-pointer flex justify-between items-center"
                                        onClick={() => toggleFaq(2)}
                                    >
                                        Printing and typesetting industry?
                                        <span className={`faq6 ${openFaq === 2 ? 'rotate-45' : ''}`}>&#43;</span>
                                    </h1>
                                    {openFaq === 2 && (
                                        <p className="faq6 text-gray-600 mt-4 text-sm sm:text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, velit.
                                        </p>
                                    )}
                                </div>

                                {/* FAQ 3 */}
                                <div className="fa3 border-b pb-4">
                                    <h1
                                        className="faq7 text-xl sm:text-2xl font-semibold cursor-pointer flex justify-between items-center"
                                        onClick={() => toggleFaq(3)}
                                    >
                                        Why do we use it?
                                        <span className={`faq8 ${openFaq === 3 ? 'rotate-45' : ''}`}>&#43;</span>
                                    </h1>
                                    {openFaq === 3 && (
                                        <p className="faq8 text-gray-600 mt-4 text-sm sm:text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, velit.
                                        </p>
                                    )}
                                </div>

                                {/* FAQ 4 */}
                                <div className="fa4 border-b pb-4">
                                    <h1
                                        className="faq9 text-xl sm:text-2xl font-semibold cursor-pointer flex justify-between items-center"
                                        onClick={() => toggleFaq(4)}
                                    >
                                        There are many variations of passages?
                                        <span className={`faq10 ${openFaq === 4 ? 'rotate-45' : ''}`}>&#43;</span>
                                    </h1>
                                    {openFaq === 4 && (
                                        <p className="faq10 text-gray-600 mt-4 text-sm sm:text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, velit.
                                        </p>
                                    )}
                                </div>

                                {/* FAQ 5 */}
                                <div className="fa5 border-b pb-4">
                                    <h1
                                        className="faq11 text-xl sm:text-2xl font-semibold cursor-pointer flex justify-between items-center"
                                        onClick={() => toggleFaq(5)}
                                    >
                                        Where can I get some?
                                        <span className={`faq12 ${openFaq === 5 ? 'rotate-45' : ''}`}>&#43;</span>
                                    </h1>
                                    {openFaq === 5 && (
                                        <p className="faq12 text-gray-600 mt-4 text-sm sm:text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, velit.
                                        </p>
                                    )}
                                </div>

                                {/* FAQ 6 */}
                                <div className="fa6 border-b pb-4">
                                    <h1
                                        className="faq13 text-xl sm:text-2xl font-semibold cursor-pointer flex justify-between items-center"
                                        onClick={() => toggleFaq(6)}
                                    >
                                        Piece of classical Latin literature from 45 BC?
                                        <span className={`faq14 ${openFaq === 6 ? 'rotate-45' : ''}`}>&#43;</span>
                                    </h1>
                                    {openFaq === 6 && (
                                        <p className="faq14 text-gray-600 mt-4 text-sm sm:text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, velit.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='w-xl rounded ring-2  shadow-xl  ring-pink-500 ring-inset faq'>

                        </div>
                    </div>
                </div>


            </div>



            <Footer />
        </>
    )
}

export default Aboutus