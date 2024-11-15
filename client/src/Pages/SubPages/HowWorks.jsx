import React from 'react'
import '../../assets/css/howworks.css'

function HowWorks() {
  return (
    <div className=' bga'>
    
     <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div className="flex justify-center align-center flex-col md:grid grid-cols-9 mx-auto p-2 text-yellow-900">
      {/* left */}
      <div className="flex flex-row-reverse md:contents">
        <div className="bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
          <h3 className="font-semibold text-lg mb-1">Register</h3>
          <p className="leading-tight text-justify">
          
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
        </div>
        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-0.5 bg-yellow-950 pointer-events-none" />
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-950 border-2 border-white shadow" />
        </div>
      </div>
      {/* right */}
      <div className="flex md:contents">
        <div className=" col-start-5 col-end-6 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-0.5 bg-yellow-950 pointer-events-none" />
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-950 border-2 border-white shadow" />
        </div>
        <div className="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
          <h3 className="font-semibold text-lg mb-1">Find your Match</h3>
          <p className="leading-tight text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
            facilis.
          </p>
        </div>
      </div>
      {/* left */}
      <div className="flex flex-row-reverse md:contents">
        <div className="bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
          <h3 className="font-semibold text-lg mb-1">Send Interest</h3>
          <p className="leading-tight text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            quaerat?
          </p>
        </div>
        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-0.5 bg-yellow-950 pointer-events-none" />
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-950 border-2 border-white shadow" />
        </div>
      </div>
      {/* left */}
      <div className="flex flex-row-reverse md:contents">
        <div className="bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
          <h3 className="font-semibold text-lg mb-1">Get Profile Information</h3>
          <p className="leading-tight text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            quaerat?
          </p>
        </div>
        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-0.5 bg-yellow-950 pointer-events-none" />
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-950 border-2 border-white shadow" />
        </div>
      </div>
      {/* right */}
      <div className="flex md:contents">
        <div className=" col-start-5 col-end-6 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-0.5 bg-yellow-950 pointer-events-none" />
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-950 border-2 border-white shadow" />
        </div>
        <div className=" bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
          <h3 className="font-semibold text-lg mb-1">Start Meetups</h3>
          <p className="leading-tight text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
            facilis.
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default HowWorks