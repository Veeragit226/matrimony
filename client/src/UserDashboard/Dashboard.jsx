import React from 'react'
import Navebar from '../Pages/Navebar'
import Footer from '../Pages/Footer'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
    Card,
    CardHeader,
    CardBody,

} from "@material-tailwind/react";


import DashNav from './DashNav/DashNav';
import Userprocesscard from './DashNav/Userprocesscard';
import Listcard from './DashNav/Listcard';
import Plandetail from './DashNav/Plandetail';
import Tabnav from './DashNav/Tabnav';
import ContNav from '../Pages/ContNav';
// import { Tabnav } from './DashNav/Tabnav';
// import { UserProcess } from './DashNav/UserProcess';

function Dashboard() {


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
    return (
        <>
            {/* Navebar */}
            <ContNav/>
            <Navebar />

            <div className="bg-[#fefbf2]">

                <div className=" mx-auto max-w-7xl justify-center items-center  text-center  justify-between p-10  ">
                    <div className='grid grid-cols-1 lg:grid-cols-4 justify-center lg:gap-5'>

                        <div className='col-span-1'>
                            <DashNav />

                        </div>
                        <div className='col-span-3 
                    
                    '>

                            {/* <div className='mx-auto max-w-7xl w-full 0 grid grid-cols-1 lg:grid-cols-5   sm:grid-cols-1  gap-4  justify-center items-center  t p-10 '>    
                    <div className="veera">veera</div>
                    <div className="veera">veera</div>
                    <div className="veera">veera</div>
                    <div className="veera">veera</div>
                    <div className="veera">veera</div>
                    </div>   */}
                    <h1 className='text-start text-yellow-900 ps-3 pt-3 font-medium'>
                    New Profiles Matches</h1>
                            <Carousel className='pb-5 ' swipeable={false}
                                draggable={false}
                                // showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay
                                autoPlaySpeed={2000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                // removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType
                                dotListClass="custom-dot-list-style"

                                itemClass="carousel-item-padding-40-px p-2">

                                <Card
                                    shadow={false}
                                    className="relative grid h-[50vh] sm:h-[30vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
                                >
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color="transparent"
                                        className="absolute inset-0 m-0 h-full w-full  rounded-none    our-ser-bg"

                                    >
                                        <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
                                    </CardHeader>
                                    <CardBody className="relative py-14 px-8 md:px-12">




                                    </CardBody>
                                </Card>


                                <Card
                                    shadow={false}
                                    className="relative grid h-[50vh] sm:h-[30vh] w-full max-w-[30rem] items-center justify-center  overflow-hidden text-center"
                                >
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color="transparent"
                                        className="absolute inset-0 m-0 h-full w-full  rounded-none  our-ser-bg0"

                                    >
                                        <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
                                    </CardHeader>
                                    <CardBody className="relative py-14 px-8 md:px-12">



                                    </CardBody>
                                </Card>



                                <Card
                                    shadow={false}
                                    className="relative grid h-[50vh] sm:h-[30vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
                                >
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color="transparent"
                                        className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg1"

                                    >
                                        <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
                                    </CardHeader>
                                    <CardBody className="relative py-14 px-8 md:px-12">



                                    </CardBody>
                                </Card>



                                <Card
                                    shadow={false}
                                    className="relative grid h-[50vh] sm:h-[30vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
                                >
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color="transparent"
                                        className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg2"

                                    >
                                        <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
                                    </CardHeader>
                                    <CardBody className="relative py-14 px-8 md:px-12">



                                    </CardBody>
                                </Card>


                                <Card
                                    shadow={false}
                                    className="relative grid h-[50vh] sm:h-[30vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
                                >
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color="transparent"
                                        className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg3"

                                    >
                                        <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
                                    </CardHeader>
                                    <CardBody className="relative py-14 px-8 md:px-12">


                                    </CardBody>
                                </Card>


                                <Card
                                    shadow={false}
                                    className="relative grid h-[50vh] sm:h-[30vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
                                >
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color="transparent"
                                        className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg4"

                                    >
                                        <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
                                    </CardHeader>
                                    <CardBody className="relative py-14 px-8 md:px-12">



                                    </CardBody>
                                </Card>


                                <Card
                                    shadow={false}
                                    className="relative grid h-[50vh] sm:h-[30vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
                                >
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color="transparent"
                                        className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg5"

                                    >
                                        <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
                                    </CardHeader>
                                    <CardBody className="relative py-14 px-8 md:px-12">



                                    </CardBody>
                                </Card>


                                <Card
                                    shadow={false}
                                    className="relative grid h-[50vh] sm:h-[30vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
                                >
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color="transparent"
                                        className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg6"

                                    >
                                        <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
                                    </CardHeader>
                                    <CardBody className="relative py-14 px-8 md:px-12">



                                    </CardBody>
                                </Card>


                                <Card
                                    shadow={false}
                                    className="relative grid h-[50vh] sm:h-[30vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
                                >
                                    <CardHeader
                                        floated={false}
                                        shadow={false}
                                        color="transparent"
                                        className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg7"

                                    >
                                        <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
                                    </CardHeader>
                                    <CardBody className="relative py-14 px-8 md:px-12">



                                    </CardBody>
                                </Card>
                            </Carousel>
                            <div className="grid grid-cols-1 lg:grid-cols-3 font-medium text-yellow-900 pb-6  gap-4">
                                <div><h1 className='pb-5 '>Profile Status</h1><Userprocesscard /></div>
                                <div><h1 className='pb-5'>Plan Details</h1><Plandetail /></div>
                                <div><h1 className='pb-5'>Recent Chat List</h1><Listcard /></div>



                            </div>
                            
                            <div className='tabnav font-medium text-yellow-900 pt-6'>
                            <h1 className='pb-5 '>Intrest request</h1>
                            <Tabnav/>
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

export default Dashboard