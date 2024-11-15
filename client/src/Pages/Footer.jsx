import React from 'react'
import Logo from '../assets/images/logo-a1.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 ">
        <div className="container px-6 py-12 mx-auto  max-w-7xl px-5  justify-between p-4  ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-sm tracking-tight text-gray-800 xl:text-xl dark:text-white">
                Trusted by over thousands of Boys & Girls for successfull marriage .
              </h1>
              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />
                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Join Us Today
                </button>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                HELP & SUPPORT
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2">
               <Link to={'/aboutus'}> <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  About Us
                </a></Link>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Feedbacks
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Testimonials
                </a>
               <Link to={'/contactus'}> <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Contact Us
                </a></Link>
               <Link to={'/faq'}> <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  FAQs
                </a></Link>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                GET IN TOUCH
              </p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <p
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 "
                >
                  Address: 3812 whymatrimony Egmore



                </p>
                <p
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 "
                >
                  Phone: +11 (12345) 55 - 5555
                </p>
                <p
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 "
                >

                  Email: whymatrimony@gamil.com
                </p>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
          <div className="flex items-center justify-between ">
            <a href="#">
              <img
                className="w-auto h-10"
                src={Logo}
                alt=""
              />
            </a>


            <div className="flex gap-2 -mx-2">
              <a href="#">
                <img
                  src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                  width={30}
                  height={30}
                  alt="fb"
                /></a>
              <a href="#">
                <img
                  src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                  width={30}
                  height={30}
                  alt="tw"
                /> </a> <a href="#">
                <img
                  src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                  width={30}
                  height={30}
                  alt="inst"
                /></a>  <a href="#">


                <img
                  src="https://www.svgrepo.com/show/28145/linkedin.svg"
                  width={30}
                  height={30}
                  alt="in"
                />
              </a>


            </div>
          </div>
        </div>
        <a href="# " className='block bg-gray-950 py-3'>
          <p className="text-white mx-auto  max-w-7xl  text-center text-sm ">
            © 2024 whymatrimony. All rights reserved.
          </p>

        </a>
      </footer>
    </>
  )
}

export default Footer