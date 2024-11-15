// import React, { useState } from 'react'
import wel from '../../assets/images/Welcometo/wel.png'




const stats = [
  { id: 1, name: 'Couples Pared', value: '2K' },
  { id: 2, name: 'Mens', value: '1600+' },
  { id: 3, name: 'Womens', value: '2000+' },
]
function Welcometo() {

// const [imgoper,setImgeopen]=useState[false]

  return (
    <div className='bg-[#fefbf5]'>
      <section className="  max-w-7xl mx-auto  px-4 sm:px-6 lg:px-4 py-12">



        <div className="container px-6 py-10 mx-auto">

          <div className="grid  grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex hidden sm:block" >
              <img
                className="object-cover w-full  "
                src={wel}
                alt=""
              />
            </div>
            <div className="lg:flex justify-center    text-start flex-col">
              <h1 className="object-cover w-full text-[#66451c] text-balance text-xl  lg:text-5xl  font-semibold tracking-wide ">
                WELCOME TO <span className='block text-[#e5026b] py-3'>WEDDING MATRIMONY</span>
              </h1>
              <p className='text-sm  lg:text-lg'>
                Best wedding matrimony It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                <span className='block py-7'>
                  <a href="" className='text-[#e5026b] font-semibold'>Click here </a> to Start you matrimony service now.</span>
              </p>
              <hr />
              <p className='py-7 text-sm  lg:text-lg'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>





              



                {/* <div className="container   mx-auto">

                  <div className="grid  grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    <div className="lg:flex">
                      veera
                      
                    </div>
                    <div className="lg:flex">
                      veera

                    </div>
                  </div>
                </div> */}
             


             <section className="text-md text-center justify-center text-yellow-900 border border-yellow-950 flex rounded-xl p-5 gap-10  md:text-xl  lg:text-2xl">
          {stats.map((stat) => (
            <div key={stat.id} className="">
              <h1 className="order-first text-3xl font-semibold tracking-tight ">
                {stat.value}<span className="block text-base/7 ">{stat.name}</span>
              </h1>
              
              
            </div>
          ))}
        </section>




            </div>

          </div>
        </div>






     




      </section>
    </div>
  )
}

export default Welcometo