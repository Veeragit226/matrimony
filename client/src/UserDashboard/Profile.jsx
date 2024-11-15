import React from 'react'
import Navebar from '../Pages/Navebar'
import Footer from '../Pages/Footer'
import DashNav from './DashNav/DashNav'
import meet1 from '../assets/images/userDashboard/1.jpg'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import Userprocesscard from './DashNav/Userprocesscard'
import ContNav from '../Pages/ContNav'

function Profile() {
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
                            
                         <div className='lg:col-span-2 '>   
                         <h1 className='pb-5  text-start text-yellow-900'>Profile Status</h1>
                        <Card className=" w-full col-span-2 ">
                            <CardHeader floated={false} className=" m-3">
                                <img src={meet1} className='w-full' alt="profile-picture" />
                                <Typography variant="h4" color="blue-gray" className=" py-3 text-white bg-gray-900">
                                    Edit Profile
                                </Typography>
                            </CardHeader>
                            
                            
                        </Card>
                        </div>
                        <div>
                        <h1 className='pb-5  text-start text-yellow-900'>Profile Status</h1>
                        <Userprocesscard/>
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

export default Profile