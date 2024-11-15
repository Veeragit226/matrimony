import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button
} from "@material-tailwind/react";
import plan from '../../assets/images/userDashboard/plan.png'
// import { Button } from 'bootstrap';

function Plandetail() {
    return (
        <>
            <Card className=" w-full items-center text-center text-yellow-900 p-5 drop-shadow-md">
                <CardHeader floated={false} className="text-yellow-900 shadow-none">
                    <h4>Standard Plan</h4>
                    <img src={plan} className='w-[10] mt-5' alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="" color="blue-gray" className="">
                        Plan Name:<span className='font-medium'>Standard</span>
                    </Typography>
                    <Typography color="blue-gray" className="" textGradient>
                        Valitity: <span className='font-medium'>6 Months</span>
                    </Typography>
                    <Typography color="blue-gray" className="" textGradient>
                        Valid Till <span className='font-medium'>24 December 2024</span>
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-end gap-5 pt-2">
                    <Button className="btn-primary">Upgrade Now</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default Plandetail