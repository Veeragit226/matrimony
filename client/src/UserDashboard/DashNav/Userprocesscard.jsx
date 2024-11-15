import React from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,

} from "@material-tailwind/react";


import like from '../../assets/images/userDashboard/heart.png'
import view from '../../assets/images/userDashboard/view.png'
import intrest from '../../assets/images/userDashboard/handshake.png'
import select from '../../assets/images/userDashboard/select.png'


function Userprocesscard() {
  return (
    <>
      <Card className=" w-full items-center  text-cen text-yellow-900 p-5 drop-shadow-md">
        <CardHeader floated={false} className="text-yellow-900 shadow-none">
          <h4>Profile Completion</h4>



          {/* circle process bar */}
          <div className="relative  size-40 mt-5">
            <svg
              className="size-full -rotate-90"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle */}
              <circle
                cx={18}
                cy={18}
                r={16}
                fill="none"
                className="stroke-current text-gray-200 dark:text-neutral-700"
                strokeWidth={4}
              />
              {/* Progress Circle */}
              <circle
                cx={18}
                cy={18}
                r={16}
                fill="none"
                className="stroke-current text-blue-600 dark:text-blue-500"
                strokeWidth={4}
                strokeDasharray={100}
                strokeDashoffset={10}
                strokeLinecap="round"
              />
            </svg>
            {/* Percentage Text */}
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500">
                90%
              </span>
            </div>
          </div>

          {/* circle process bar */}



        </CardHeader>
        <CardBody  className="font-light text-xs  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-2 text-sm  gap-5 pt-2">
        

<a href="#" className='flex gap-1'>
  <img
   className='bg-[#f8896b] p-1 rounded-full'
    src={like}
    width={25}
    height={25}
    alt="like"
  /><span>1MLike</span>
  </a>
<a href="#" className='flex gap-1'>
  <img
  className='bg-[#84e8f5] p-1 rounded-full'
    src={view}
    width={25}
    height={25}
    alt="fb"
  /><span>40View</span>
  </a>
<a href="#" className='flex gap-1'>
  <img
  className='bg-[#ffbd66] p-1 rounded-full'
    src={intrest}
    width={25}
    height={25}
    alt="fb"
  /><span>12Intrest</span>
  </a>
<a href="#" className='flex gap-1'>
  <img
   className='bg-[#52459d] p-1 rounded-full'
    src={select}
    width={25}
    height={25}
    alt="fb"
  /><span>12Clicks</span>
  </a>


        </CardBody>
        
      </Card>
    </>
  )
}

export default Userprocesscard