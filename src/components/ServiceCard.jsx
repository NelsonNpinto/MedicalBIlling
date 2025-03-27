import React from 'react'

const ServiceCard = ({ title, description, icon, features }) => {
  return (
    <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
      {/* Background gradient overlay */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 
        rounded-xl opacity-50 group-hover:opacity-75 
        transition duration-300 blur-sm group-hover:blur-lg"></div>
      
      {/* Card content */}
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden h-full
        transition-all duration-300 group-hover:shadow-2xl">
        <div className="p-6 flex flex-col h-full">
          {/* Icon and Title */}
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 
              rounded-full flex items-center justify-center mr-4
              transition-transform duration-300 group-hover:rotate-12">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 
              transition-colors duration-300 group-hover:text-blue-600">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>

          {/* Features List */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
              Key Benefits:
            </h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center text-sm text-gray-600
                    transition-transform duration-300 group-hover:translate-x-2"
                >
                  <svg 
                    className="w-5 h-5 mr-3 text-blue-500
                      transition-transform duration-300 group-hover:rotate-45" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More Button */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 text-center">
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 
              text-white px-4 py-2 rounded-lg text-sm font-semibold
              hover:shadow-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard