import React from 'react'

import '../../assets/css/home.css'
import ContNav from '../ContNav'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import servector1 from '../../assets/images/ourservices/vector1.png'
import servector2 from '../../assets/images/ourservices/vector5.png'
import servector3 from '../../assets/images/ourservices/vector4.png'
import servector4 from '../../assets/images/ourservices/vector1.png'
import servector5 from '../../assets/images/ourservices/vector5.png'
import servector6 from '../../assets/images/ourservices/vector4.png'
import servector7 from '../../assets/images/ourservices/vector1.png'
import servector8 from '../../assets/images/ourservices/vector5.png'



import trust1 from '../../assets/images/EXPLORE4.jpg'
import trust2 from '../../assets/images/EXPLORE1.jpg'
import trust3 from '../../assets/images/EXPLORE3.jpg'
// import OursrsCard from './OursrsCard';



// import { lazy, Suspense } from 'react';
// const Nabar = lazy(() => import('./Navebar'))


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Button
} from "@material-tailwind/react";

import Footer from '../Footer';
import Whychooseus from '../SubPages/Whychooseus';
import Welcometo from '../SubPages/Welcometo';
import HowWorks from '../SubPages/HowWorks';
import TrustedCouples from '../SubPages/TrustedCouples';
import MeetOurteam from '../SubPages/MeetOurteam';
import Findyourmatch from '../SubPages/Findyourmatch';
import Navebar from '../Navebar';
import Dnav from './Dnav';
import { Link } from 'react-router-dom';



function Dhome() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 557 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 557, min: 0 },
      items: 1
    }
  };



  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1440, min: 557 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 557, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <>
      {/* nav-bar-start */}
      {/* <ContNav /> */}
      {/* <Navebar /> */}
      
        <Dnav/>
      

      {/* banner ection */}
      <div className="relative px-6 bg-img text-white  lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className="mx-auto max-w-6xl px-5  justify-between p-4  sm:py-40  lg:py-46">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center  ">
            <h1 className="text-balance text-xl font-semibold tracking-wide   sm:text-4xl">
              #1 Matrimony
            </h1>
            <h1 className="text-balance text-3xl font-semibold tracking-wide  sm:text-7xl">
              Find Your
              <br />
              <span className='text-[#f00]'> Right Match </span> here
            </h1>
            <h1 className="text-balance text-5xl font-semibold tracking-tight pb-2  sm:text-7xl">
            </h1>
            <p className=" text-pretty text-sm sm:text-lg font-medium">
              Most Trusted Matrimony Platform in the world.
            </p>

            <div className="mt-10 text-yellow-900 items-center rounded p-5 bg-gray-950 bg-opacity-60 justify-center gap-x-6">

              {/* <dropdown/> */}


              <form action="" className=' flex justify-around gap-3 flex-wrap'>
                <select name="Gender" id="" className='flex-1 rounded py-2 px-1'>
                  <optgroup className='px-5'>
                    <option value="">I'M Looking for</option>
                    <option value="">Men</option>
                    <option value="">Women</option>
                  </optgroup>

                </select>
                <select name="Age" id="" className='flex-1 rounded py-2 px-1'>
                  <optgroup className='px-10'>
                    <option value="">Age</option>
                    <option value="">18 to 30</option>
                    <option value="">31 to 40</option>
                    <option value="">41 to 50</option>
                    <option value="">51 to 60</option>
                  </optgroup>
                </select>
                <select name="Religian" id="" className='flex-1 rounded py-2 px-1'>
                  <optgroup className='px-10'>
                    <option value="">Any</option>
                    <option value="">Hindu</option>
                    <option value="">Muslim</option>
                    <option value="">Cristian</option>
                  </optgroup>
                </select>
                <select name="Location" id="" className='flex-1 rounded py-2 px-1'>
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
                
                <button className=' btn-primary flex-1'><Link to={'login'}>Search</Link></button>
              </form>








            </div>

          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >



        </div>
      </div>


      {/* OUR SERVICES */}
      <div className='bg-black '>
        <div className="mx-auto  max-w-7xl  text-center  justify-between py-5 ">
          <h1 className='text-[#c48c46] text-balance text-xl font-semibold tracking-wide pb-5  sm:text-2xl'>QUICK ACCESS</h1>
          <h1 className='text-[#c48c46] text-balance text-4xl font-semibold tracking-wide pb-5  sm:text-5xl'>OUR SERVICES</h1>
          <Carousel className='py-5 ' swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType
            dotListClass="custom-dot-list-style"

            itemClass="carousel-item-padding-40-px p-3  transition-all  hover:scale-x-110 hover:scale-y-110">





            <Card
              shadow={false}
              className="relative grid h-[55vh] w-full max-w-[30rem] items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full  rounded-none  our-ser-bg"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/90" />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="tania andrew"
                  className='border rounded-xl p-5 border-2'
                  src={servector1}
                />
                <div className='py-5 text-white'>
                  <h1 className='text-lg'>PROFILE</h1>
                  <h1 className='text-base'>Start for free</h1>
                </div>


              </CardBody>
            </Card>


            <Card
              shadow={false}
              className="relative grid h-[55vh] w-full max-w-[30rem] items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full  rounded-none  our-ser-bg0"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/90" />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="tania andrew"
                  className='border rounded-xl p-5 border-2'
                  src={servector2}
                />
                <div className='py-5 text-white'>
                  <h1 className='text-lg'>WEDDING </h1>
                  <h1 className='text-base'>Start for free</h1>
                </div>


              </CardBody>
            </Card>



            <Card
              shadow={false}
              className="relative grid h-[55vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg1"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/90" />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="tania andrew"
                  className='border rounded-xl p-5 border-2'
                  src={servector3}
                />
                <div className='py-5 text-white'>
                  <h1 className='text-lg'>ARTICLES</h1>
                  <h1 className='text-base'>Start for free</h1>
                </div>


              </CardBody>
            </Card>



            <Card
              shadow={false}
              className="relative grid h-[55vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg2"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/90" />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="tania andrew"
                  className='border rounded-xl p-5 border-2'
                  src={servector4}
                />
                <div className='py-5 text-white'>
                  <h1 className='text-lg'>ALL SERVICE</h1>
                  <h1 className='text-base'>Start for free</h1>
                </div>


              </CardBody>
            </Card>


            <Card
              shadow={false}
              className="relative grid h-[55vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg3"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/90" />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="tania andrew"
                  className='border rounded-xl p-5 border-2'
                  src={servector5}
                />
                <div className='py-5 text-white'>
                  <h1 className='text-lg'>GALLERY</h1>
                  <h1 className='text-base'>Start for free</h1>
                </div>


              </CardBody>
            </Card>


            <Card
              shadow={false}
              className="relative grid h-[55vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg4"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/90" />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="tania andrew"
                  className='border rounded-xl p-5 border-2'
                  src={servector6}
                />
                <div className='py-5 text-white'>
                  <h1 className='text-lg'>JOIN NOW</h1>
                  <h1 className='text-base'>Start for free</h1>
                </div>


              </CardBody>
            </Card>


            <Card
              shadow={false}
              className="relative grid h-[55vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg5"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/90" />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="tania andrew"
                  className='border rounded-xl p-5 border-2'
                  src={servector7}
                />
                <div className='py-5 text-white'>
                  <h1 className='text-lg'>WEDDINGS</h1>
                  <h1 className='text-base'>Start for free</h1>
                </div>


              </CardBody>
            </Card>


            <Card
              shadow={false}
              className="relative grid h-[55vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg6"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/90" />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="tania andrew"
                  className='border rounded-xl p-5 border-2'
                  src={servector8}
                />
                <div className='py-5 text-white'>
                  <h1 className='text-lg'>BLOCK</h1>
                  <h1 className='text-base'>Start for free</h1>
                </div>


              </CardBody>
            </Card>


            <Card
              shadow={false}
              className="relative grid h-[55vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg7"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/50 via-black/90" />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="tania andrew"
                  className='border rounded-xl p-5 border-2'
                  src={servector4}
                />
                <div className='py-5 text-white'>
                  <h1 className='text-lg'>ARTICLES</h1>
                  <h1 className='text-base'>Start for free</h1>
                </div>


              </CardBody>
            </Card>













          </Carousel>
        </div>

      </div>



      {/* TRUSTED BRAND */}
      <div className=' bg-[#fcfcfc] '>
        <div className=" mx-auto max-w-7xl justify-center items-center  text-center  justify-between py-20 ">
          <h1 className='text-[#c48c46] text-balance text-xl font-semibold tracking-wide pb-5  sm:text-2xl'>Trusted Brand</h1>
          <h1 className='text-[#66451c] text-balance text-4xl font-semibold tracking-wide pb-5  sm:text-5xl'>Trusted by 1500+ Couple</h1>

          
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




      {/* whycoose us */}



      <Whychooseus />





      {/* Welcome to page */}
      <Welcometo />


      {/* How its works */}
      <HowWorks />

      {/* Trusted brand couples */}
      <TrustedCouples />



      {/* Meet our team */}
      <MeetOurteam />



      {/* footer */}
      <Findyourmatch/>

      {/* footer */}
      <Footer />
    </>
  )
}






export default Dhome