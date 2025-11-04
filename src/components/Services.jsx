import React from 'react'
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react'
import ServiceCard from './ServiceCard'
import ScrollReveal from './animations/ScrollReveal'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Eligibility Verification",
      description: "Verifying insurance eligibility is one of the most critical steps in the medical billing process. Patient insurance verification plays a key role in any healthcare specialty's claims denials. DataMatrix provides an efficient, scalable, and economical solution for your needs.",
      icon: <Shield className="w-6 h-6 text-white" />,
      features: [
        "Real-time insurance verification",
        "Patient benefit coverage analysis",
        "Copay and deductible identification",
        "Pre-visit eligibility confirmation",
        "Multi-payer verification support"
      ]
    },
    {
      id: 2,
      title: "Prior Authorization",
      description: "Obtaining prior Authorization for services can burden staff, but this is critical for reimbursement. If prior Authorization is not performed, clinicians may find that they have performed unnecessary or duplicative services. Let DataMatrix provide this service.",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      features: [
        "Comprehensive pre-authorization analysis",
        "Insurance guideline compliance tracking",
        "Clinical documentation preparation",
        "Submission and follow-up management",
        "Appeal process coordination"
      ]
    },
    {
      id: 3,
      title: "Denial Management",
      description: "Our systematic approach to denial management helps healthcare providers recover lost revenue and reduce future claim rejections. We analyze denial patterns, develop targeted solutions, and implement preventive strategies to optimize your revenue cycle.",
      icon: <AlertTriangle className="w-6 h-6 text-white" />,
      features: [
        "Root cause denial analysis",
        "Strategic appeal development",
        "Claims resubmission processing",
        "Denial trend reporting",
        "Prevention strategy implementation"
      ]
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 relative overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
  <ScrollReveal
    baseOpacity={0}
    enableBlur={true}
    baseRotation={5}
    blurStrength={10}
    containerClassName="mb-4 flex justify-center"
    textClassName="text-4xl font-extrabold text-gray-900 sm:text-5xl text-center"
  >
    AIQuantTech Medical Billing Solutions
  </ScrollReveal>

  <ScrollReveal
    baseOpacity={0}
    enableBlur={true}
    baseRotation={3}
    blurStrength={8}
    containerClassName="flex justify-center"
    textClassName="max-w-3xl text-xl text-gray-600 leading-relaxed text-center"
  >
    Empowering healthcare providers with cutting-edge revenue cycle management, we transform complex billing challenges into strategic financial opportunities.
  </ScrollReveal>
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
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 
            hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 
            rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transform hover:scale-105"
            aria-label="Schedule a consultation"
          >
            <span className="text-lg font-semibold mr-3">Schedule Consultation</span>
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

export default Services