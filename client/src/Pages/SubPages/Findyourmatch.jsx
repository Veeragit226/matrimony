import React from 'react'
// import bottom from '../../assets/images/bottom.png'
import '../../assets/css/findmatch.css'

function Findyourmatch() {
    return (
        <>
            <div className='bg-[#fffcf3] text-center  p-5'>


                <div className="mx-auto bg-[#ffeebf]  flex flex-col gap-5 rounded-2xl flex-wrap   max-w-7xl  text-center  justify-base gap-3 pt-20 ">

                    <h1 className='text-yellow-900 text-balance text-2xl font-semibold   sm:text-4xl'>Find your perfect Match now</h1>
                    <p className="text-md tracking-wide  px-20 text-yellow-900 font-normal">lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla.Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> 
                   
                    </p>
                    <div className='flex flex-wrap  justify-center gap-5 p-5'>
                    <button class=" btn-primary2  px-10 py-3">
                        Register Now
                    </button>
                    <button class=" btn-primary3   px-9 py-3">
                        Help & Support
                    </button>
                    </div>

                    <div className='flex object-cover animate-pulse  h-20 bottom-bg items-end'>
                        {/* <img src={bottom}  alt="" /> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Findyourmatch