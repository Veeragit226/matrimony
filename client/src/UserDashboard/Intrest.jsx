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
import Tabnav from './DashNav/Tabnav'
import ContNav from '../Pages/ContNav'

function Intrest() {
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
                        <div className="col-span-3  gap-5">
                            
                        <Tabnav/>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <Footer />
        </>
    )
}

export default Intrest