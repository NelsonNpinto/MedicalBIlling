import React from 'react'
import { Activity, FileText, Database, Monitor, Users, Stethoscope } from 'lucide-react'
import EhrSystemCard from './EhrSystemCard'

const EhrCompatibility = () => {
  const ehrSystems = [
    {
      id: 1,
      name: "ATHENA",
      icon: <Activity className="w-8 h-8 text-white" />,
      description: "Athena Health Practice Management"
    },
    {
      id: 2,
      name: "ALLSCRIPTS",
      icon: <FileText className="w-8 h-8 text-white" />,
      description: "Electronic Health Records"
    },
    {
      id: 3,
      name: "ECLINICAL WORKS",
      icon: <Monitor className="w-8 h-8 text-white" />,
      description: "Cloud-based EHR Solutions"
    },
    {
      id: 4,
      name: "MODMED",
      icon: <Stethoscope className="w-8 h-8 text-white" />,
      description: "Specialty-focused EHR"
    },
    {
      id: 5,
      name: "GECENTRICITY",
      icon: <Database className="w-8 h-8 text-white" />,
      description: "Healthcare Data Management"
    },
    {
      id: 6,
      name: "NEXTGEN",
      icon: <Users className="w-8 h-8 text-white" />,
      description: "Practice Management Suite"
    }
  ]

  return (
    <section id="ehr-compatibility" className="py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px), 
                           radial-gradient(circle at 75% 75%, #6366f1 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-200/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-200/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            EHR COMPATIBILITY
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
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
              description={system.description}
            />
          ))}
        </div>

        {/* Additional compatibility note */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Seamless Integration Guaranteed
            </h3>
            <p className="text-gray-600">
              Our platform integrates with 100+ EHR systems through standardized APIs, 
              ensuring smooth data flow and minimal disruption to your existing workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EhrCompatibility