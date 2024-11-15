import React from 'react'
import Navebar from '../Pages/Navebar'
import Footer from '../Pages/Footer'
import DashNav from './DashNav/DashNav'
import profile from '../assets/images/userDashboard/3.jpg'
import ContNav from '../Pages/ContNav'




function Settings() {
    return (
        <>
            {/* navbar */}
            <ContNav/>
            <Navebar />



            {/* dashnav */}

            <div className="bg-[#fefbf2]">

                <div className=" mx-auto max-w-7xl justify-center items-center  text-center  justify-between p-10  ">
                    <div className='grid grid-cols-1 lg:grid-cols-4 justify-center  lg:gap-5'>

                        <div className='col-span-1 mb-5 sm:mb-5'>

                            <DashNav />
                        </div>
                        <div className="col-span-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">

                            <div className='col-span-3 text-start text-yellow-900'>
                                <h1 className='pb-5 '>Plans details</h1>

                                <form action="" className='border border-1 rounded p-5 text-start'>
                                    <label htmlFor="" className=''>Profile</label> <hr />
                                    <div className='m-5 flex justify-between '>
                                        <div className='flex  gap-2 items-center'>
                                            <img className="w-10 h-10 rounded-full" src={profile} alt="Rounded avatar" />
                                            <h1>Anna Jaslin
                                                <span className='block text-sm font-light'>Premium user | Illunoi</span>
                                            </h1>

                                        </div>
                                        <button className='btn-signout'>Signout</button>
                                    </div>
                                    <hr />

                                    <div className='m-5 flex justify-between lg:gap-x-20 gap-x-8 sm:gap-x-5'>
                                        <h1>Profile visible

                                            <span className='block text-sm font-light'> You can set-up who can able to view your profile.</span>
                                        </h1>
                                        <div>
                                            <select
                                                id="uservisiblity"
                                                className="border border-black lg:px-2 lg:py-1 rounded "
                                            >
                                                <option selected="">All Users</option>
                                                <option value="">Premium</option>
                                                <option value="">Free</option>

                                            </select>
                                        </div>

                                    </div>
                                    <hr />
                                    <div className='m-5 flex justify-between lg:gap-x-20 gap-x-8 sm:gap-x-5'>
                                        <h1>Who can send you Interest requests?

                                            <span className='block text-sm font-light'> You can set-up who can able to make Interest request here.</span>
                                        </h1>
                                        <div>
                                            <select
                                                id="uservisiblity"
                                                className="border border-black lg:px-2 lg:py-1 rounded "
                                            >
                                                <option selected="">All Users</option>
                                                <option value="">Premium</option>
                                                <option value="">Free</option>

                                            </select>
                                        </div>

                                    </div>
                                    <hr />



                                    <div className='m-5 flex justify-between '>
                                        <h1>Account
                                        </h1>
                                   </div> <hr />

                                    <div className='m-5 flex justify-start lg:gap-x-20 gap-x-8 sm:gap-x-5 '>
                                    <p className='block text-sm font-light'> Full name</p>
                                    <p className='block text-sm font-light'> Anna Jaslin</p>
                                   </div> <hr />
                                    <div className='m-5 flex justify-start lg:gap-x-20 gap-x-8 sm:gap-x-5 '>
                                    <p className='block text-sm font-light'>Mobile</p>
                                    <p className='block text-sm font-light'> +01 4343 53553</p>
                                   </div> <hr />
                                    <div className='m-5 flex justify-start lg:gap-x-20 gap-x-8 sm:gap-x-5 '>
                                    <p className='block text-sm font-light'> Email id</p>
                                    <p className='block text-sm font-light'> loremipsum@gmail.com</p>
                                   </div> <hr />
                                    <div className='m-5 flex justify-start lg:gap-x-20 gap-x-8 sm:gap-x-5 '>
                                    <p className='block text-sm font-light'> Password</p>
                                    <p className='block text-sm font-light'> **********</p>
                                   </div> <hr />
                                    <div className='m-5 flex justify-start lg:gap-x-20 gap-x-8 sm:gap-x-5 '>
                                    <p className='block text-sm font-light'>Profile type</p>
                                    <p className='block text-sm font-light'> Platinum</p>
                                   </div> <hr />
                                </form>

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

export default Settings