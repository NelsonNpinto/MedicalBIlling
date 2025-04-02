import React from 'react'
import EhrSystemCard from './EhrSystemCard'

const EhrCompatibility = () => {
  const ehrSystems = [
    {
      id: 1,
      name: "ATHENA",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-6 4h6m-6 4h3" />
          <path d="M16 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 2,
      name: "ALLSCRIPTS",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
          <line x1="7" y1="7" x2="17" y2="7" strokeWidth="2" />
          <line x1="7" y1="10.5" x2="17" y2="10.5" strokeWidth="2" />
          <line x1="7" y1="14" x2="17" y2="14" strokeWidth="2" />
          <line x1="7" y1="17.5" x2="17" y2="17.5" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 3,
      name: "ECLINICAL WORKS",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="5" strokeWidth="2" />
          <line x1="12" y1="13" x2="12" y2="21" strokeWidth="2" />
          <line x1="8" y1="17" x2="16" y2="17" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 4,
      name: "MODMED",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
          <circle cx="9" cy="12" r="3" strokeWidth="2" />
          <line x1="14" y1="9" x2="19" y2="9" strokeWidth="2" />
          <line x1="14" y1="12" x2="19" y2="12" strokeWidth="2" />
          <line x1="14" y1="15" x2="19" y2="15" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 5,
      name: "GECENTRICITY",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" strokeWidth="2" />
          <circle cx="12" cy="8" r="2" strokeWidth="2" />
          <path d="M7 17.5C7.93 16.57 9.85 15.5 12 15.5c2.15 0 4.07 1.07 5 2" strokeLinecap="round" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 6,
      name: "NEXTGEN",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
          <line x1="7" y1="8" x2="17" y2="8" strokeWidth="2" />
          <line x1="7" y1="12" x2="17" y2="12" strokeWidth="2" />
          <line x1="7" y1="16" x2="17" y2="16" strokeWidth="2" />
        </svg>
      )
    }
  ]

  return (
    <section id="ehr-compatibility" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl mb-4">
            EHR COMPATIBILITY
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We are compatible with all EHR systems. Compared to other solutions, our 
            hybrid solutions are free of system hurdles or integration issues. Here are a 
            few of those systems we are compatible with:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {ehrSystems.map((system) => (
            <EhrSystemCard
              key={system.id}
              name={system.name}
              icon={system.icon}
            />
          ))}
        </div>

       
      </div>
    </section>
  )
}

export default EhrCompatibility