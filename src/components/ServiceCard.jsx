import React from 'react'

const ServiceCard = ({ title, description, icon, features }) => {
  return (
    <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
      {/* Card content */}
      <div className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden h-full
        transition-all duration-300 border border-gray-100">
        <div className="p-6 flex flex-col h-full">
          {/* Icon and Title */}
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4
              transition-all duration-300"
              style={{ backgroundColor: '#007aff' }}>
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
                  className="flex items-center text-sm text-gray-600"
                >
                  <svg 
                    className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" 
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
          <div className="mt-6 text-center">
            <a 
              href="#contact" 
              className="inline-block text-white px-6 py-2 rounded-lg text-sm font-semibold
              shadow-md hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#007aff' }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = '#0056cc';
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = '#007aff';
              }}
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