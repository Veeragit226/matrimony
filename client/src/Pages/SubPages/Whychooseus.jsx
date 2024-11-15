import React from 'react'
import Genune from '../../assets/images/whychoose/Why1.png'
import Trust from '../../assets/images/whychoose/Why2.png'
import wedding from '../../assets/images/whychoose/Why3.png'
import '../../assets/css/whychoose.css'

function Whychooseus() {
    return (
        <>
            {/* <div className='bg-gradient-to-r  from-[#2a262691] to-[#2a2c3c]'>
                <div className=" max-w-6xl mx-auto px-4  sm:px-6 lg:px-4 py-12">
                    
                </div>
            </div> */}
            <div className='bg sm:bg-hidden'>
            <section  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">

            <div className="text-center  tracking-wide text-balance pb-12">
                        <h2 className="text-base font-bold text-yellow-300 ">
                            #1 Matrimony
                        </h2>
                        <h1 className="font-bold text-3xl py-5 md:text-4xl lg:text-5xl font-heading text-bg">
                            Why Choose Us
                        </h1>
                        <h2 className="text-base text-white ">
                        Most Trusted and premium Matrimony Service in the World.
                        </h2>
                    </div>
                <div className="grid items-center justify-center grid-cols-1  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
                   
                    <div className="w-full  shadow-md hover:shadow-2xl bg-white rounded-lg px-7  py-7 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img
                                className="object-center object-cover rounded-full h-12 w-12"
                                src={Genune}
                                alt="photo"
                            />
                        </div>
                        <div className="text-center text-yellow-900">
                            <p className="text-lg  font-bold mb-2">Genuine profiles</p>
                            <p className="text-sm  font-normal">Contact genuine profiles with 100% verified mobile</p>
                        </div>
                    </div>
                    <div className="w-full  shadow-md hover:shadow-2xl bg-white rounded-lg px-7  py-7 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img
                                className="object-center object-cover rounded-full h-12 w-12"
                                src={Trust}
                                alt="photo"
                            />
                        </div>
                        <div className="text-center text-yellow-900">
                            <p className="text-lg font-bold mb-2">Most Trusted</p>
                            <p className="text-sm font-normal">The most trusted wedding matrimony brand lorem</p>
                        </div>
                    </div>
                    <div className="w-full  shadow-md  hover:shadow-2xl bg-white rounded-lg px-7  py-7 flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img
                                className="object-center object-cover rounded-full h-12 w-12"
                                src={wedding}
                                alt="photo"
                            />
                        </div>
                        <div className="text-center text-yellow-900">
                            <p className="text-lg font-bold mb-2">2000+ weddings
                           </p>
                            <p className="text-sm  font-normal"> Lakhs of peoples have found their life partner lorem</p>
                        </div>
                    </div>
                   
                </div>
            </section>
            </div>
        </>
    )
}

export default Whychooseus