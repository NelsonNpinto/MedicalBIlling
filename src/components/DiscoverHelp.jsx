import React from 'react'
import stressedDoc from "../assets/stressedDoc.webp"
import dataentry from "../assets/dataentry.avif"
import staffturnover from "../assets/staffturnover.avif"
import calling from "../assets/calling.avif"

const BenefitCard = ({ title, description, imageUrl }) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-80">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-100 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

const DiscoverHelp = () => {
  const benefits = [
    {
      id: 1,
      title: "Reduce Physician Burnout",
      description: "Physician burnout is at an all-time high of 63%, what are you doing to decrease this so you can focus on your patients?",
      imageUrl: stressedDoc
    },
    {
      id: 2,
      title: "Save Time Entering Notes Into Your EHR",
      description: "Most physicians spend 1/3 of their time documenting in their EHR – get that time back!",
      imageUrl: staffturnover
    },
    {
      id: 3,
      title: "Reduce Staff Turnover",
      description: "The pandemic has impacted the healthcare field and many healthcare providers have decided to leave the field. Are struggling to meet patients' demands? We can help.",
      imageUrl: dataentry
    },
    {
      id: 4,
      title: "Increase Reimbursement Rates",
      description: "On average 63% of patient claim denials are from ineffectively verifying insurance eligibility. Let us take this burden off of your staff with our Prior Authorization service.",
      imageUrl: calling
    }
  ]

  return (
    <section id="discover-help" className="py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px), 
                           radial-gradient(circle at 75% 75%, #6366f1 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-200/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-200/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Discover How We Can Help You
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Our solutions are designed to address the most pressing challenges facing healthcare providers today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              imageUrl={benefit.imageUrl}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 
            hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 
            rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transform hover:scale-105"
            aria-label="Schedule a consultation"
          >
            <span className="text-lg font-semibold mr-3">Start Your Journey Today</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default DiscoverHelp