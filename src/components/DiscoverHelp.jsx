import React from 'react'
import stressedDoc from "../assets/stressedDoc.webp"
import dataentry from "../assets/dataentry.avif"
import staffturnover from "../assets/staffturnover.avif"
import calling from "../assets/calling.avif"

const BenefitCard = ({ title, description, imageUrl, isReversed = false }) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-10 md:mb-24 gap-8">
      {/* Image container - conditionally ordered based on isReversed */}
      <div className={`w-full md:w-1/2 ${isReversed ? 'md:order-last' : ''}`}>
       <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-white shadow-xl">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Content container */}
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-indigo-800 mb-3">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
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
      imageUrl: staffturnover,
      isReversed: true
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
      imageUrl: calling,
      isReversed: true
    }
  ]

  return (
    <section id="discover-help" className="py-16 bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl mb-4">
            Discover How We Can Help You
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Our solutions are designed to address the most pressing challenges facing healthcare providers today.
          </p>
        </div>

        <div className="mt-12">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              imageUrl={benefit.imageUrl}
              isReversed={benefit.isReversed}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-700 
            text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl 
            transition-all duration-300 transform hover:scale-105 
            hover:rotate-1 focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-blue-500"
            aria-label="Schedule a consultation"
          >
            <span className="text-lg font-semibold mr-3">Start Your Journey Today</span>
            <svg
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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