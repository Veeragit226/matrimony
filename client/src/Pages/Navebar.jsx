import { useEffect, useState } from 'react'
import { Dialog, DialogPanel, DialogBackdrop, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/images/logo-a.png'
import Profile from '../assets/images/profile.png'
import '../assets/css/nav.css'
import { AnimatePresence, motion } from "framer-motion";
import { Link } from 'react-router-dom'
import { RiYoutubeFill, RiInstagramFill, RiLinkedinFill, RiWhatsappFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri";

import axios from 'axios'

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


const explore = [
  { name: 'PROWSE PROFILE' },
  { name: 'WEDDING PROFILE' },
  { name: 'ALL SERVICES' },
]
const all = [
  { name: 'ALL PROFILE' },
  { name: 'PROFILE DETAILS' },
  { name: 'WEDDING' },
  { name: 'WEDDING VIDEO' },
  { name: 'OUR SERVICE' },
  { name: 'PRICING PLANING' },
  { name: 'LOGIN' },
  { name: 'SING-UP' },
  { name: 'PHOTO GALLERY 1' },
  { name: 'PHOTO GALLERY 2' },
  { name: 'CONTACT' },
  { name: 'ABOUT' },
  { name: 'ASK YOUR DOUBTS' },
  { name: 'FAQ' },
  { name: '404' },
]

const user = [
  { name: 'veerapandiyan', headding: 'user' }
]
export default function Navebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [test,setTest]=useState([])
  useEffect(()=>{

    axios.get('http://localhost:5000/api/getuserbyid')
    .then(test=>setTest(test.data))
    .catch(err => console.log(err))
  },[])
  

  return (
    <>
      <header className="sticky bg-white inset-x-0 top-0 z-top  shadow-md ">
        <nav aria-label="Global" className="mx-auto max-w-7xl px-5 flex items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">

            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Link to={'/home'}>
                <img
                  alt=""
                  src={Logo}
                  className="h-10 w-auto"
                /></Link>
            </a>
          </div>
          <div className="flex lg:hidden  ">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center   rounded-full p-2.5 text-white  
              animate-ping
              relative  bg-yellow-600"
            >
              <span className=" sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className=" h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex absolute items-center justify-center rounded-full p-2.5 text-white  bg-yellow-600"
            >
              <span className=" sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className=" h-6 w-6" />
            </button>
          </div>
          <div className="hidden ps-20 lg:flex lg:gap-x-8 text-sm text-yellow-900">
            {/* {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/5  text-yellow-900">
                {item.name}
              </a>
            ))} */}


            <FlyoutLink href="#" className="text-sm/5   " FlyoutContent={Explore}>
              EXPLORE
            </FlyoutLink>
            <FlyoutLink href="#" className="text-sm/5  " FlyoutContent={Allpages}>
              ALL PAGES
            </FlyoutLink>
            <FlyoutLink href="#" className="text-sm/5  " FlyoutContent={Toppages}>
              TOP PAGES
            </FlyoutLink>
            <FlyoutLink href="#" className="text-sm/5  " >
              <Link to={'/plan'}> PLANING </Link>
            </FlyoutLink>
            <FlyoutLink href="#" className="text-sm/5  " >
              <Link to={'/signup'}>
                REGISTER</Link>
            </FlyoutLink>
            <FlyoutLink href="#" className="text-sm/5  " FlyoutContent={Dashboard}>
              DASHBOARD
            </FlyoutLink>

          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative  flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={Profile}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              {/* <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                <Link to={'/login'} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"> <a >
                   Login
                  </a></Link>
                </MenuItem>
                <MenuItem>
                <Link to={'/signup'} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  <a  >
                    Sign Up
                  </a></Link>
                </MenuItem>
              </MenuItems> */}
            </Menu> 
          </div>


          <div className="hidden ps-2 lg:flex lg:gap-x-8">
            {test.map((item) => (

              <a key={item._id} className=''>
                <span className='text-sm/5 text-gray-600'>{item.email}</span><br />
                <span className=" text-yellow-900">{item.name}</span>

              </a>
            ))}

            <Link to={'/'} className='text-sm/5 text-gray-600'>Logout</Link>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
          />
          <DialogPanel className="fixed  inset-y-0 right-0 z-50 w-full  overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <p className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Link to={'/'}> <img
                  alt=""
                  src={Logo}
                  className="h-8 w-auto"
                /></Link>

              </p>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 pb-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 text-sm py-6">
                  <h1 className='text-base/5 text-yellow-900 px-2 py-2 hover:bg-gray-50'>EXPLORE PAGES</h1>
                  {explore.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block ms-2 ps-5 border-b py-2 text-sm  hover:bg-gray-200"
                    >

                      {item.name}
                    </a>
                  ))}
                  <h1 className='text-base/5 text-yellow-900 px-2 py-2 hover:bg-gray-50'>ALL PAGES</h1>
                  {all.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block ms-2 ps-5 border-b py-2 text-sm  hover:bg-gray-200"
                    >

                      {item.name}
                    </a>
                  ))}



                  {/* support team  */}
                  <h1 className='text-base/5 text-yellow-900 px-2 pt-2 hover:bg-gray-50'>SUPPORT TEAM</h1>
                  <div className="py-6 flex">
                    <div className=" lg:flex lg:flex-1 lg:justify-end">
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <MenuButton className="mt-3 relative  flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              alt=""
                              src={Profile}
                              className="h-20  w-20 rounded-full"
                            />
                          </MenuButton>
                        </div>
                      </Menu>
                    </div>


                    <div className="ps-5 pt-1 lg:flex lg:gap-x-8">
                      {user.map((item) => (

                        <a key={item.name} href={item.href} className='block pb-3'>

                          <span className="block text-yellow-900">{item.name}</span>
                          <span className='text-sm/5 text-gray-600'>{item.headding}</span>

                        </a>

                      ))}

                      <a href="#"
                        className="rounded-md bg-sky-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Ask Your Doubts
                      </a>

                    </div>



                  </div>






                </div>

              </div>
            </div>

            <div className=' flex justify-around bg-gray-300 rounded p-5' >
              <a href="#" className="">
                <RiWhatsappFill className=" w-8 h-8   rounded text-sky-950   hover:text-yellow-900 " />
              </a>

              <a href="">
                <RiFacebookFill className=" w-8 h-8   rounded text-sky-950  hover:text-yellow-900 " />
              </a>
              <a href="">
                <RiTwitterFill className=" w-8 h-8   rounded text-sky-950  hover:text-yellow-900 " />
              </a>
              <a href="">
                < RiLinkedinFill className=" w-8 h-8   rounded text-sky-950  hover:text-yellow-900 " />
              </a>
              <a href="">
                <RiYoutubeFill className=" w-8 h-8   rounded text-sky-950  hover:text-yellow-900 " />
              </a>
              <a href="">
                <RiInstagramFill className=" w-8 h-8   rounded text-sky-950  hover:text-yellow-900 " />
              </a>

            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  )
}



// FlyoutLink

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-yellow-900">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-yellow-900 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-yellow-900" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// explore details
const Explore = () => {
  return (
    <>
      <h3 className="font-semibold text-yellow-900  bg-white p-6 shadow-xl">Explore</h3>

      <div className="fullwidth grid grid-col-3 text-yellow-900  bg-white p-6 shadow-xl">
        <div className="px-2 mb-3  space-y-3">

          <a className=" block text-sm ">
            <Link to={'/allprofiles'}>
              <Card className="card-dtl card-child-1 max-w-xs transition duration-300 ease-in-out hover:scale-110">

                <CardBody>
                  <Typography variant="h5">
                    Browse Profile
                  </Typography>
                  <Typography>

                    1200+ VERIFIED PROFILE
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0 ">
                  <Button className="px-3 py-2 bg-black">Read More</Button>
                </CardFooter>

              </Card>
            </Link>
          </a>

        </div>
        <div className="mb-3  space-y-3">

          <a href="#" className="block text-sm ">
            <Card className="card-dtl card-child-2 max-w-xs transition duration-300 ease-in-out hover:scale-110">
              <CardBody>
                <Typography variant="h5">
                  Wedding Page
                </Typography>
                <Typography>
                  MAKE A RESERVATION
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 ">
                <Button className="px-3 py-2 bg-black">Read More</Button>
              </CardFooter>
            </Card>
          </a>
        </div>
        <div className="px-2 mb-3  space-y-3">

          <a href="#" className="block text-sm ">
            <Card className="card-dtl card-child-3  max-w-xs transition duration-300 ease-in-out hover:scale-110">
              <CardBody>
                <Typography variant="h5">
                  ALL SERVICES
                </Typography>
                <Typography>
                  LOREM IPSUM DUMMY
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 ">
                <Button className="px-3 py-2 bg-black">Read More</Button>
              </CardFooter>
            </Card>
          </a>
        </div>


      </div>
    </>
  );
};



// All pages
const Allpages = () => {
  return (
    <>
      <div className="fullwidth flex flex-row text-yellow-900  bg-white p-6 shadow-xl">
        <div className="mb-3 flex-none space-y-3">
          <h3 className="font-semibold">PAGE SETS 1</h3>
          <a href="#" className="block  text-sm hover:underline">
            <Link to={'/allprofiles'}> ALL PROFILES </Link>
          </a>
          <a href="#" className="block text-sm hover:underline">
            <Link to={'/profiles-details'}> PROFILE DETAILS </Link>
          </a>

          <a href="#" className="block  text-sm hover:underline">
            <Link to={'/plan'}> PRICING PLANING </Link>
          </a>
          <a href="#" className="block text-sm hover:underline">
            <Link to={'/askyourdoubts'}> ASK YOUR DOUBTS</Link>
          </a>
          {/* <a href="#" className="block text-sm hover:underline">
            WEDDING
          </a>
          <a href="#" className="block text-sm hover:underline">
            WEDDING VIDEO
          </a>
          <a href="#" className="block text-sm hover:underline">
            OUR SERVICES
          </a> */}
        </div>
        <div className="mb-3  flex-none space-y-3">
          <h3 className="font-semibold">PAGE SETS 2</h3>
          
          <a href="#" className="block text-sm hover:underline">
            <Link to={'/login'}> LOGIN</Link>
          </a>
          <a href="#" className="block text-sm hover:underline">
            <Link to={'/signup'}> SING-UP</Link>
          </a>
          <a href="#" className="block  text-sm hover:underline">
            <Link to={'/contactus'}>CONTACT</Link>
          </a>
          <a href="#" className="block text-sm hover:underline">
            <Link to={'/aboutus'}>ABOUT</Link>
          </a>
         
        </div>
        <div className="mb-3 flex-none space-y-3">
          <h3 className="font-semibold">PAGE SETS 3</h3>
          
        
          <a href="#" className="block text-sm hover:underline">
            <Link to={'/faq'}>FAQ</Link>
          </a>
          <a href="#" className="block text-sm hover:underline">
            <Link to={'/error'}>404</Link>
          </a>
           <a href="#" className="block text-sm hover:underline">
            PHOTO GALLERY 1
          </a>
          <a href="#" className="block text-sm hover:underline">
            PHOTO GALLERY 2
          </a>
        </div>


      </div>

      <hr />
      <h3 className="font-semibold  text-yellow-900 px-12 pt-5  bg-white shadow-xl">USER DASHBOARD PAGES</h3>
      <div className="fullwidth flex  text-yellow-900  bg-white p-6 shadow-xl">
        <div className="mb-3  space-y-3">

          <a href="#" className="block  text-sm hover:underline">
            <Link to={'/dashboard'}> DASHBOARD</Link>
          </a>
          <a href="#" className="block text-sm hover:underline">
            <Link to={'/myplan'}> MY PLAN DETAILS</Link>
          </a>

        </div>
        <div className="mb-3  space-y-3">

          <a href="#" className="block  text-sm hover:underline">
            <Link to={'/profile'}> MY PROFILE</Link>
          </a>
          <a href="#" className="block text-sm hover:underline">
            <Link to={'/settings'}> PROFILE SETTINGS</Link>
          </a>

        </div>
        <div className="mb-3  space-y-3">

          <a href="#" className="block  text-sm hover:underline">
            <Link to={'/intrest'}> INTEREST </Link>
          </a>
          <a href="#" className="block text-sm hover:underline">
            <Link to={'/edite/profile'}> EDIT FULL PROFILE </Link>
          </a>
        </div>


      </div>
    </>


  );
};



// Toppages
const Toppages = () => {
  return (
    <div className="topers text-yellow-900  bg-white p-6 shadow-xl">
      <div className="mb-3  space-y-3">

        <a href="#" className="block  text-sm hover:underline">
          <Link to={'/allprofiles'}> ALL PROFILES </Link>
        </a>
        <a href="#" className="block text-sm hover:underline">
          <Link to={'/profiles-details'}> PROFILE DETAILS</Link>
        </a>

        <a href="#" className="block text-sm hover:underline">
          <Link to={'/aboutus'}> ABOUT </Link>
        </a>
        <a href="#" className="block text-sm hover:underline">
          <Link to={'/contactus'}>CONTACT</Link>
        </a>
        <a href="#" className="block text-sm hover:underline">
          <Link to={'/login'}> LOGIN </Link>
        </a>
        <a href="#" className="block text-sm hover:underline">
          <Link to={'/signup'}> SIGN-UP </Link>
        </a>
        <a href="#" className="block text-sm hover:underline">
          <Link to={'/plan'}> PRICING PLANS </Link>
        </a>
      </div>



    </div>
  );
};


// Dashboard
const Dashboard = () => {
  return (
    <div className="topers text-yellow-900  bg-white p-6 shadow-xl">
      <div className="mb-3  space-y-3">

        <a href="#" className="block  text-sm hover:underline">
          <Link to={'/dashboard'}>
            DASHBOARD</Link>
        </a>
        <a href="#" className="block text-sm hover:underline"><Link to={'/profile'}>
          MY PROFILE</Link>
        </a>
        <a href="#" className="block text-sm hover:underline">
          <Link to={'/intrest'}>
            INTEREST
          </Link>
        </a>
        <a href="#" className="block text-sm hover:underline">
          <Link to={'/myplan'}>
            MY PLAN DETAILS
          </Link>
        </a>
        <a href="#" className="block text-sm hover:underline">
          <Link to={'/settings'}> PROFILE SETTINGS</Link>
        </a>
        <a href="#" className="block text-sm hover:underline">
          <Link to={'/edite/profile'}> EDIT FULL PROFILE</Link>
        </a>
        <a href="#" className="block text-sm hover:underline">
          <Link to={'/signup'}> SIGN-UP </Link>
        </a>

      </div>



    </div>
  );
};


// export {FlyoutLink,PricingContent}







