import React from 'react'

const About = () => {
  const features = [
    {
      title: "Decade of Expertise",
      description: "10+ years of specialized medical billing experience",
      icon: (
        <svg className="h-7 w-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "HIPAA Compliance",
      description: "Stringent HIPAA compliant processes and systems",
      icon: (
        <svg className="h-7 w-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Professional Certification",
      description: "Certified medical billing and coding professionals",
      icon: (
        <svg className="h-7 w-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      )
    }
  ]

  const stats = [
    { id: 1, value: "150+", label: "Clients Served" },
    { id: 2, value: "98.5%", label: "Success Rate" },
    { id: 3, value: "$275K", label: "Avg. Revenue Recovered" }
  ]

  return (
    <section 
      id="about" 
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Content Section */}
          <div className="lg:pr-8">
            <div className="mb-10">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
                About <span className="text-blue-600">PriorAuthPro</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are a specialized medical billing service focused on transforming complex healthcare revenue cycles. With a unique US-based strategy and operations in India, we provide precision-driven prior authorization and denial management solutions.
              </p>
            </div>

            {/* Features Section */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md 
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image and Stats Section */}
          <div className="mt-12 lg:mt-0 relative group">
            <div className="relative">
              <img 
                className="rounded-xl shadow-2xl object-cover w-full h-auto 
                transition-transform duration-300 group-hover:scale-105" 
                src="/images/medical-billing-team.jpg" 
                alt="Medical Billing Professionals" 
                loading="lazy"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent py-6 px-6 rounded-b-xl">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.id} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About