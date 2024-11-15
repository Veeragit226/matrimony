import React from 'react'
import Navebar from './Navebar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import ContNav from './ContNav'



function Error() {
    return (
        <>
            {/* inline style */}
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    
                    __html:
                        "\n      .text-9xl{\n      font-size: 14rem;\n      }\n      @media(max-width: 645px){\n      .text-9xl{\n      font-size: 5.75rem;\n      }\n      .text-6xl{\n      font-size: 1.75rem;\n      }\n      .text-2xl {\n      font-size: 1rem;\n      line-height: 1.2rem;\n      }\n      .py-8 {\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n      }\n      .px-6 {\n      padding-left: 1.2rem;\n      padding-right: 1.2rem;\n      }\n      .mr-6{\n      margin-right: 0.5rem;\n      }\n      .px-12 {\n      padding-left: 1rem;\n      padding-right: 1rem;\n      }\n      }\n    "
                }}
            />


            {/* navbar */}
            <ContNav/>
            <Navebar />


            <div className=" w-9/12 m-auto text-yellow-900 py-16 min-h-screen flex items-center justify-center">
                <div className="bg-gradient-to-r from-[#ffeeb2] to-[#f2d184] shadow overflow-hidden sm:rounded-lg ">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <h1 className="text-2xl font-light py-8">oops! Page not found</h1>
                        <h1 className="text-9xl font-medium">404</h1>

                        <p className="text-2xl pb-8 px-12 font-light">
                            We can't seem to find the page you are looking for.
                        </p>
                        <button className='btn-support'><Link to={'/'}>VISIT HOME PAGE NOW</Link></button>

                        <div className='flex object-cover animate-pulse  h-20 bottom-bg items-end'>
                            {/* <img src={bottom}  alt="" /> */}
                        </div>

                    </div>
                </div>
            </div>

            {/* footer */}
            <Footer/>

        </>
    )
}

export default Error