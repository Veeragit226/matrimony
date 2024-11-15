
import React, { useState } from 'react';


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "@material-tailwind/react";
import image1 from '../../assets/images/userDashboard/1.jpg'
import image2 from '../../assets/images/userDashboard/2.jpg'
import image3 from '../../assets/images/userDashboard/3.jpg'
import image4 from '../../assets/images/userDashboard/13.jpg'
import image5 from '../../assets/images/userDashboard/14.jpg'
import image6 from '../../assets/images/userDashboard/16.jpg'


function Tabnav() {

  const [activeTab, setActiveTab] = useState("newRequests");

  const tabs = [
    { id: "newRequests", label: "New requests" },
    { id: "acceptRequests", label: "Accept request" },
    { id: "denyRequests", label: "Deny request" },
  ];


  const newrequest = [
    { name: 'Rashma', city: 'Trichy', age: '27', height: '6.4', job: 'working', requesttime: ' 10:30AM,18 August 2024', viewbutton: 'view full profile', src:image1  },
    { name: 'Androw', city: 'Trichy', age: '27', height: '6.4', job: 'working', requesttime: ' 10:30AM,18 August 2024', viewbutton: 'view full profile', src:image2  },
    { name: 'Androw', city: 'Trichy', age: '27', height: '6.4', job: 'working', requesttime: '10:30AM,18 August 2024', viewbutton: 'view full profile', src:image3  },
    { name: 'Androw', city: 'Trichy', age: '27', height: '6.4', job: 'working', requesttime: '10:30AM,18 August 2024', viewbutton: 'view full profile', src:image4  },
  ]
  const acceptrequest = [
    { name: 'Rashma', city: 'Trichy', age: '27', height: '6.4', job: 'working', requesttime: ' 10:30AM,18 August 2024', viewbutton: 'view full profile', src:image5  },
    { name: 'Androw', city: 'Trichy', age: '27', height: '6.4', job: 'working', requesttime: ' 10:30AM,18 August 2024', viewbutton: 'view full profile', src:image2  },

  ]
  const rejectrequest = [
    { name: 'Rashma', city: 'Trichy', age: '27', height: '6.4', job: 'working', requesttime: ' 10:30AM,18 August 2024', viewbutton: 'view full profile', src:image6 },

  ]

  return (
    <>

      <div className="container  bg-white p-5  shadow rounded-lg mx-auto p-4">
        {/* Tab Navigation */}
        <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3  gap-2  bg-gray-100 p-2 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-medium text-sm md:text-base rounded-lg ${activeTab === tab.id
                ? "bg-yellow-900 text-white"
                : "bg-white text-yellow-900"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
            
          ))}

          
        </div>

        {/* Tab Content */}
        <div className="">
          {activeTab === "newRequests" &&


            // request 
            <>         
           
              {newrequest.map((tab) => {
                const { name, city, age, height, job, requesttime, viewbutton, src } = tab;
                return (
                  <>
                   <Card className='w-full p-2 my-5
                      max-w-9xl
                       grid text-yellow-900
                        justify-center text-start
                         grid-cols-1 
                         md:grid-cols-4 
                         sm:grid-cols-1 
                          lg:grid-cols-4
                          '>
                    <CardHeader className='bg-yellow-900  max-w-xl ' >
                      <img key={name} src={src} alt="" className='object-cover transition-all hover:scale-110' />
                      
                    </CardHeader>
                    <CardBody className=' cols-grow col-span-2'>
                      <h1>{name}</h1>
                      <ul  className="font-light grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 list-disc marker:text-[#68686a] list-inside">
                        <li className='text-sm'>
                        city : <span className='text-md  ps-2'>{city}</span>
                        </li>
                        <li className='text-sm'>
                        Age : <span className='text-md  ps-2'>{age}</span>
                        </li>
                        <li className='text-sm'>
                        Height : <span className='text-md ps-2'>{height}</span>
                        </li>
                       
                      </ul>
                      <button class="rounded-md  mt-3 text-yellow-900 py-1 px-2.5 border border-gray-300 text-center text-sm text-white transition-all shadow-sm hover:shadow  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button" >{viewbutton}</button>
                      </CardBody>
                    <CardFooter className='col-span-1 text-sm font-light'>
                      <div className='flex gap-2'>
                      <button
                      class="rounded-md bg-green-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button" 
                      >Accept
                      </button>
                    <button
                    class="rounded-md text-red-500 py-1 px-2.5 border border-red-500 text-center text-sm text-red-500 transition-all shadow-sm hover:shadow  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button" 
                    >Denay</button>
                    </div>
                    </CardFooter>
                    </Card><hr />
                  </>
                )
              }

              )}
            
            </>
            // request card
          }
          {activeTab === "acceptRequests" &&
            

            // request 
            <>         
           
              {acceptrequest.map((tab) => {
                const { name, city, age, height, job, requesttime, viewbutton, src } = tab;
                return (
                  <>
                   <Card className='w-full p-2 my-5   max-w-9xl grid text-yellow-900 justify-center text-start grid-cols-1 md:grid-cols-4 sm:grid-cols-1  lg:grid-cols-4'>
                    <CardHeader className='bg-yellow-900  max-w-xl ' >
                      <img key={name} src={src} alt="" className='object-cover  transition-all hover:scale-110' />
                      
                    </CardHeader>
                    <CardBody className=' cols-grow col-span-2'>
                      <h1>{name}</h1>
                      <ul  className="font-light grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 list-disc marker:text-[#68686a] list-inside">
                        <li className='text-sm'>
                        city : <span className='text-md  ps-2'>{city}</span>
                        </li>
                        <li className='text-sm'>
                        Age : <span className='text-md  ps-2'>{age}</span>
                        </li>
                        <li className='text-sm'>
                        Height : <span className='text-md ps-2'>{height}</span>
                        </li>
                       
                      </ul>
                      <button class="rounded-md  mt-3 text-yellow-900 py-1 px-2.5 border border-gray-300 text-center text-sm text-white transition-all shadow-sm hover:shadow  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button" >{viewbutton}</button>
                      </CardBody>
                    <CardFooter className='col-span-1 text-sm font-light'>
                      <div className='flex gap-2'>
                     
                    <button
                    class="rounded-md text-red-500 py-1 px-2.5 border border-red-500 text-center text-sm text-red-500 transition-all shadow-sm hover:shadow  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button" 
                    >Denay</button>
                    </div>
                    </CardFooter>
                    </Card><hr />
                  </>
                )
              }

              )}
            
            </>
            // request card

          }
          {activeTab === "denyRequests" &&
            


            // request 
            <>         
           
              {rejectrequest.map((tab) => {
                const { name, city, age, height, job, requesttime, viewbutton, src } = tab;
                return (
                  <>
                   <Card className='w-full p-2 my-5   max-w-9xl grid text-yellow-900 justify-center text-start grid-cols-1 md:grid-cols-4 sm:grid-cols-1  lg:grid-cols-4'>
                    <CardHeader className='bg-yellow-900  max-w-xl ' >
                      <img key={name} src={src} alt="" className='object-cover  transition-all hover:scale-110 ' />
                      
                    </CardHeader>
                    <CardBody className=' cols-grow col-span-2'>
                      <h1>{name}</h1>
                      <ul  className="font-light grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 list-disc marker:text-[#68686a] list-inside">
                        <li className='text-sm'>
                        city : <span className='text-md  ps-2'>{city}</span>
                        </li>
                        <li className='text-sm'>
                        Age : <span className='text-md  ps-2'>{age}</span>
                        </li>
                        <li className='text-sm'>
                        Height : <span className='text-md ps-2'>{height}</span>
                        </li>
                       
                      </ul>
                      <button class="rounded-md  mt-3 text-yellow-900 py-1 px-2.5 border border-gray-300 text-center text-sm text-white transition-all shadow-sm hover:shadow  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button" >{viewbutton}</button>
                      </CardBody>
                    <CardFooter className='col-span-1 text-sm font-light'>
                      <div className='flex gap-2'>
                      <button
                      class="rounded-md bg-green-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button" 
                      >Accept
                      </button>
                   
                    </div>
                    </CardFooter>
                    </Card><hr />
                  </>
                )
              }

              )}
            
            </>
            // request card



          }
        </div>
      </div>


    </>
  )
}

export default Tabnav