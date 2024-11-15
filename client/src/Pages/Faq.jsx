import React, { useState } from 'react'
import Navebar from './Navebar';
import Footer from './Footer';
import ContNav from './ContNav';

function Faq() {

  // State to manage which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  // Toggle function for FAQ answers
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  return (
    <>
    <ContNav/>
    <Navebar/>
    <div className='bg-[#fffcf2] p-7'>
    <div className="fa  bg-white p-5 max-w-6xl mx-auto  shadow-xl">
      <h2 className="faq1 text-center text-3xl sm:text-4xl font-semibold mb-4">FAQ</h2>
      <h1 className="faq2 text-center text-2xl sm:text-3xl font-light mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        {/* FAQ 1 */}
        <div className="fa1 border-b pb-4">
          <h1 
            className="faq3 text-xl sm:text-2xl font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => toggleFaq(1)}
          >
            How does a Matrimony website work?
            <span className={`faq4 ${openFaq === 1 ? 'rotate-45' : ''}`}>&#43;</span>
          </h1>
          {openFaq === 1 && (
            <p className="faq4 text-gray-600 mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="fa2 border-b pb-4">
          <h1 
            className="faq5 text-xl sm:text-2xl font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => toggleFaq(2)}
          >
            Printing and typesetting industry?
            <span className={`faq6 ${openFaq === 2 ? 'rotate-45' : ''}`}>&#43;</span>
          </h1>
          {openFaq === 2 && (
            <p className="faq6 text-gray-600 mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, velit.
            </p>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="fa3 border-b pb-4">
          <h1 
            className="faq7 text-xl sm:text-2xl font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => toggleFaq(3)}
          >
            Why do we use it?
            <span className={`faq8 ${openFaq === 3 ? 'rotate-45' : ''}`}>&#43;</span>
          </h1>
          {openFaq === 3 && (
            <p className="faq8 text-gray-600 mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, velit.
            </p>
          )}
        </div>

        {/* FAQ 4 */}
        <div className="fa4 border-b pb-4">
          <h1 
            className="faq9 text-xl sm:text-2xl font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => toggleFaq(4)}
          >
            There are many variations of passages?
            <span className={`faq10 ${openFaq === 4 ? 'rotate-45' : ''}`}>&#43;</span>
          </h1>
          {openFaq === 4 && (
            <p className="faq10 text-gray-600 mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, velit.
            </p>
          )}
        </div>

        {/* FAQ 5 */}
        <div className="fa5 border-b pb-4">
          <h1 
            className="faq11 text-xl sm:text-2xl font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => toggleFaq(5)}
          >
            Where can I get some?
            <span className={`faq12 ${openFaq === 5 ? 'rotate-45' : ''}`}>&#43;</span>
          </h1>
          {openFaq === 5 && (
            <p className="faq12 text-gray-600 mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, velit.
            </p>
          )}
        </div>

        {/* FAQ 6 */}
        <div className="fa6 border-b pb-4">
          <h1 
            className="faq13 text-xl sm:text-2xl font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => toggleFaq(6)}
          >
            Piece of classical Latin literature from 45 BC?
            <span className={`faq14 ${openFaq === 6 ? 'rotate-45' : ''}`}>&#43;</span>
          </h1>
          {openFaq === 6 && (
            <p className="faq14 text-gray-600 mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, velit.
            </p>
          )}
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Faq