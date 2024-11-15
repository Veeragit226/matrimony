import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meet1 from '../../assets/images/meetOurTeam/meet1.jpg'
import meet2 from '../../assets/images/meetOurTeam/meet2.jpg'
import meet3 from '../../assets/images/meetOurTeam/meet3.jpg'
import meet4 from '../../assets/images/meetOurTeam/meet4.jpg'


import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";


function MeetOurteam() {

   
    return (
        <>
            <div className='bg-[#fffcf3] text-center  justify-between py-5'>
            <h1 className='text-[#c48c46] text-balance text-xl font-semibold tracking-wide pb-5  sm:text-2xl'>OUR PROFESSIONALS</h1>
                    <h1 className='text-yellow-900 text-balance text-4xl font-semibold tracking-wide pb-5  sm:text-5xl'>Meet Our Team</h1>
                   
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-w-7xl  text-center  justify-between gap-4  items-center p-5 ">
                    




                        <Card className=" w-full">
                            <CardHeader floated={false} className=" m-3">
                                <img src={meet2} className='w-full' alt="profile-picture" />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Emily Arrov
                                </Typography>
                                <Typography color="blue-gray" className="font-medium" textGradient>
                                   Creative Manager
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex justify-center gap-7 pt-2">
                                <Tooltip content="Like">
                                    <Typography
                                        as="a"
                                        href="#facebook"
                                        variant="lead"
                                        color="blue"
                                        textGradient
                                    >
                                        <a href="#">
                                    <img
                                        src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                                        width={25}
                                        height={25}
                                        alt="fb"
                                    /></a>
                                    </Typography>
                                </Tooltip>
                                <Tooltip content="Follow">
                                    <Typography
                                        as="a"
                                        href="#twitter"
                                        variant="lead"
                                        color="light-blue"
                                        textGradient
                                    >
                                         <a href="#">
                                    <img
                                        src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                                        width={25}
                                        height={25}
                                        alt="tw"
                                    /> </a>
                                    </Typography>
                                </Tooltip>
                                <Tooltip content="Follow">
                                    <Typography
                                        as="a"
                                        href="#instagram"
                                        variant="lead"
                                        color="purple"
                                        textGradient
                                    >
                                       <a href="#">
                                    <img
                                        src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                                        width={25}
                                        height={25}
                                        alt="inst"
                                    /></a> 
                                    </Typography>
                                </Tooltip>

                               
                              

                                
                                
                            </CardFooter>
                        </Card>
                        <Card className="w-full">
                            <CardHeader floated={false} className=" m-3">
                                <img src={meet3} className='w-full' alt="profile-picture" />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Julia Sear
                                </Typography>
                                <Typography color="blue-gray" className="font-medium" textGradient>
                                  Client Coordinator
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex justify-center gap-7 pt-2">
                                <Tooltip content="Like">
                                    <Typography
                                        as="a"
                                        href="#facebook"
                                        variant="lead"
                                        color="blue"
                                        textGradient
                                    >
                                        <a href="#">
                                    <img
                                        src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                                        width={25}
                                        height={25}
                                        alt="fb"
                                    /></a>
                                    </Typography>
                                </Tooltip>
                                <Tooltip content="Follow">
                                    <Typography
                                        as="a"
                                        href="#twitter"
                                        variant="lead"
                                        color="light-blue"
                                        textGradient
                                    >
                                         <a href="#">
                                    <img
                                        src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                                        width={25}
                                        height={25}
                                        alt="tw"
                                    /> </a>
                                    </Typography>
                                </Tooltip>
                                <Tooltip content="Follow">
                                    <Typography
                                        as="a"
                                        href="#instagram"
                                        variant="lead"
                                        color="purple"
                                        textGradient
                                    >
                                       <a href="#">
                                    <img
                                        src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                                        width={25}
                                        height={25}
                                        alt="inst"
                                    /></a> 
                                    </Typography>
                                </Tooltip>

                               
                              

                                
                                
                            </CardFooter>
                        </Card>
                        <Card className="w-full">
                            <CardHeader floated={false} className=" m-3">
                                <img src={meet1} className='w-full' alt="profile-picture" />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Ashley Jen
                                </Typography>
                                <Typography color="blue-gray" className="font-medium" textGradient>
                                   Marketing Manager
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex justify-center gap-7 pt-2">
                                <Tooltip content="Like">
                                    <Typography
                                        as="a"
                                        href="#facebook"
                                        variant="lead"
                                        color="blue"
                                        textGradient
                                    >
                                        <a href="#">
                                    <img
                                        src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                                        width={25}
                                        height={25}
                                        alt="fb"
                                    /></a>
                                    </Typography>
                                </Tooltip>
                                <Tooltip content="Follow">
                                    <Typography
                                        as="a"
                                        href="#twitter"
                                        variant="lead"
                                        color="light-blue"
                                        textGradient
                                    >
                                         <a href="#">
                                    <img
                                        src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                                        width={25}
                                        height={25}
                                        alt="tw"
                                    /> </a>
                                    </Typography>
                                </Tooltip>
                                <Tooltip content="Follow">
                                    <Typography
                                        as="a"
                                        href="#instagram"
                                        variant="lead"
                                        color="purple"
                                        textGradient
                                    >
                                       <a href="#">
                                    <img
                                        src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                                        width={25}
                                        height={25}
                                        alt="inst"
                                    /></a> 
                                    </Typography>
                                </Tooltip>

                               
                              

                                
                                
                            </CardFooter>
                        </Card>
                        <Card className="w-full">
                            <CardHeader floated={false} className=" m-3">
                                <img src={meet4} className='w-full' alt="profile-picture" />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Ashley Jen
                                </Typography>
                                <Typography color="blue-gray" className="font-medium" textGradient>
                                   Marketing Manager
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex justify-center gap-7 pt-2">
                                <Tooltip content="Like">
                                    <Typography
                                        as="a"
                                        href="#facebook"
                                        variant="lead"
                                        color="blue"
                                        textGradient
                                    >
                                        <a href="#">
                                    <img
                                        src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                                        width={25}
                                        height={25}
                                        alt="fb"
                                    /></a>
                                    </Typography>
                                </Tooltip>
                                <Tooltip content="Follow">
                                    <Typography
                                        as="a"
                                        href="#twitter"
                                        variant="lead"
                                        color="light-blue"
                                        textGradient
                                    >
                                         <a href="#">
                                    <img
                                        src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                                        width={25}
                                        height={25}
                                        alt="tw"
                                    /> </a>
                                    </Typography>
                                </Tooltip>
                                <Tooltip content="Follow">
                                    <Typography
                                        as="a"
                                        href="#instagram"
                                        variant="lead"
                                        color="purple"
                                        textGradient
                                    >
                                       <a href="#">
                                    <img
                                        src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                                        width={25}
                                        height={25}
                                        alt="inst"
                                    /></a> 
                                    </Typography>
                                </Tooltip>

                               
                              

                                
                                
                            </CardFooter>
                        </Card>











                    
                </div>

            </div>

        </>
    )
}

export default MeetOurteam