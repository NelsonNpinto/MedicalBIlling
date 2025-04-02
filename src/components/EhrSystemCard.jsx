import React from 'react'

const EhrSystemCard = ({ name, icon }) => {
  return (
    <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
      {/* Background circle with gradient border */}
      <div className="rounded-full aspect-square relative w-32 h-32 mx-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 
          opacity-10 group-hover:opacity-20 transition duration-300"></div>
        
        {/* Card content */}
        <div className="relative bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm 
          rounded-full shadow-lg overflow-hidden h-full flex items-center justify-center
          transition-all duration-300 group-hover:shadow-xl border border-gray-100">
          <div className="p-4 flex items-center justify-center">
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center
              transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>
        </div>
      </div>
      
      {/* EHR System Name */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold text-indigo-800 tracking-wide
          transition-colors duration-300 group-hover:text-indigo-600">
          {name}
        </h3>
      </div>
    </div>
  )
}

export default EhrSystemCard