import React from 'react'
import l1 from '../../assets/images/userDashboard/2.jpg'
import l2 from '../../assets/images/userDashboard/13.jpg'
import l3 from '../../assets/images/userDashboard/14.jpg'
import l6 from '../../assets/images/userDashboard/16.jpg'

function Listcard() {
  return (
    <div className="w-full   p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
    <div className="flow-root">
      <ul role="list" className="divide-y text-start text-yellow-900 dark:divide-gray-300">
        <li className="py-3 sm:py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="w-12 h-12 rounded-full"
                src={l1}
                alt="Neil image"
              />
            </div>
            <div className="flex-1  min-w-0 ms-4">
              <p className="text-sm font-medium  truncate ">
                Neil Sims
              </p>
              <p className="text-sm truncate ">
                Tambaram, Chennai
              </p>
            </div>
          
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center ">
            <div className="flex-shrink-0">
              <img
                className="w-12 h-12 rounded-full"
                src={l2}
                alt="Bonnie image"
              />
            </div>
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium truncate ">
                Bonnie Green
              </p>
              <p className="text-sm truncate ">
                Eaurkad,selam
              </p>
            </div>
          
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="w-12 h-12 rounded-full"
                src={l3}
                alt="Michael image"
              />
            </div>
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium truncate">
                Michael Gough
              </p>
              <p className="text-sm truncate">
                Mattuthavani,Madhurai
              </p>
            </div>
            
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center ">
            <div className="flex-shrink-0">
              <img
                className="w-12 h-12 rounded-full"
                src={l6}
                alt="Lana image"
              />
            </div>
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium truncate ">
                Lana Byrd
              </p>
              <p className="text-sm truncate">
                Meenampakkam,Chennai
              </p>
            </div>
           
          </div>
        </li>
        
      </ul>
    </div>
  </div>
  
  )
}

export default Listcard