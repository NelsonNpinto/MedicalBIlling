import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Prior Authorization Expertise",
      description: "Streamline complex approval processes with our specialized prior authorization services. We meticulously handle documentation, submission, and proactive follow-up to maximize your claim success rates.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: [
        "Comprehensive pre-authorization analysis",
        "Real-time insurance guideline tracking",
        "Detailed documentation preparation",
        "Proactive claim submission support"
      ]
    },
    {
      id: 2,
      title: "Advanced Denial Management",
      description: "Recover lost revenue and minimize future denials with our forensic approach. We dive deep into root causes, develop strategic appeals, and implement preventive measures.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      ),
      features: [
        "Comprehensive denial root cause analysis",
        "Strategic appeal development",
        "Claims reprocessing optimization",
        "Ongoing denial prevention strategies"
      ]
    },
    {
      id: 3,
      title: "Comprehensive Revenue Cycle Management",
      description: "Transform your financial performance with our end-to-end revenue cycle management. We provide intelligent, data-driven solutions that optimize every stage of your billing process.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      ),
      features: [
        "Intelligent eligibility verification",
        "Automated claim submission & tracking",
        "Advanced payment posting",
        "Predictive accounts receivable management"
      ]
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Precision Medical Billing Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Empowering healthcare providers with cutting-edge revenue cycle management, 
            we transform complex billing challenges into strategic financial opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-700 
            text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl 
            transition-all duration-300 transform hover:scale-105 
            hover:rotate-2 focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-blue-500"
            aria-label="Schedule a consultation"
          >
            <span className="text-lg font-semibold mr-3">Schedule Consultation</span>
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

export default Services