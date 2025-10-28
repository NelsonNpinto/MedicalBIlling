import React from 'react'

const EhrSystemCard = ({ name, icon }) => {
  return (
    <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
      {/* Background circle with gradient border */}
      <div className="rounded-full aspect-square relative w-32 h-32 mx-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 
          opacity-15 group-hover:opacity-25 transition duration-300"></div>
        
        {/* Card content */}
        <div className="relative bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm 
          rounded-full shadow-lg overflow-hidden h-full flex items-center justify-center
          transition-all duration-300 group-hover:shadow-xl border border-gray-200">
          <div className="p-4 flex items-center justify-center">
            {/* Icon with colored background */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full
              bg-gradient-to-br from-blue-500 to-blue-600 shadow-md
              transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
              {icon}
            </div>
          </div>
        </div>
      </div>
      
      {/* EHR System Name */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold text-gray-800 tracking-wide
          transition-colors duration-300 group-hover:text-blue-600">
          {name}
        </h3>
      </div>
    </div>
  )
}

export default EhrSystemCard