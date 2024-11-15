import React from 'react'
import Navebar from '../Pages/Navebar'
import Footer from '../Pages/Footer'
import DashNav from './DashNav/DashNav'
import meet1 from '../assets/images/userDashboard/1.jpg'

import { DocumentIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Card, IconButton, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
    "Plan Type",
    "Duration",
    "Cost",
    "Invoice",
];

const TABLE_ROWS = [
    {
        planType: "Platinum",
        Duration: "12 Months",
        Cost: "$500"
    },
    {
        planType: "Standard",
        Duration: "6 Months",
        Cost: "$250"
    },
    {
        planType: "Standard",
        Duration: "6 Months",
        Cost: "$250"
    },

];


import Plandetail from './DashNav/Plandetail'
import ContNav from '../Pages/ContNav'

function Myplandetails() {
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

                            <div className=' '>
                                <h1 className='pb-5  text-start text-yellow-900'>Plans details</h1>
                                <Plandetail />
                            </div>
                            <div className='lg:col-span-2'>
                                <h1 className='pb-5  text-start text-yellow-900'>All Invoice</h1>

                                {/* Invoice */}



                                <Card className="w-full p-5 ">
                                    <table className="w-full  min-w-max table-auto text-left">
                                        <thead className='border ' >
                                            <tr>
                                                {TABLE_HEAD.map((head) => (
                                                    <th key={head} className="p-4 pt-10 border border-2">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-bold leading-none"
                                                        >
                                                            {head}
                                                        </Typography>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className='border'>
                                            {TABLE_ROWS.map(({ planType, Duration, Cost }) => {
                                                return (
                                                    <tr key={planType} className='border border-2 divide-x-2'>
                                                        <td className="p-4">
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal text-gray-600"
                                                            >
                                                                {planType}
                                                            </Typography>
                                                        </td>
                                                        <td className="p-4">
                                                            <Typography
                                                                variant="small"
                                                                className="font-normal text-gray-600"
                                                            >
                                                                {Duration}
                                                            </Typography>
                                                        </td>
                                                        <td className="p-4">
                                                            <Typography
                                                                variant="small"
                                                                className="font-normal text-gray-600"
                                                            >
                                                                {Cost}
                                                            </Typography>
                                                        </td>
                                                        <td className="p-4">
                                                        <Typography
                                                                variant="small"
                                                                className="font-normal text-gray-600"
                                                            >
                                                            <IconButton variant="text" size="sm">
                                                                <ArrowDownTrayIcon
                                                                    strokeWidth={3}
                                                                    className="h-4 w-4 text-gray-900"
                                                                />
                                                            </IconButton>
                                                            
                                                            
                                                            </Typography>
                                                        </td>


                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </Card>

                                {/* Invoice */}
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

export default Myplandetails