import { useRef, useEffect } from 'react'

const Hero = () => {
  const headingRef = useRef(null)
  const subheadingRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const animateElements = () => {
      const elements = [
        { ref: headingRef, delay: 100, translateY: 20 },
        { ref: subheadingRef, delay: 300, translateY: 20 },
        { ref: ctaRef, delay: 500, translateY: 20 },
        { ref: imageRef, delay: 300, translateX: 20 }
      ]

      elements.forEach(({ ref, delay, translateY, translateX }) => {
        if (ref.current) {
          const element = ref.current
          
          // Reset initial state
          element.style.opacity = '0'
          element.style.transform = translateY 
            ? `translateY(${translateY}px)` 
            : `translateX(${translateX}px)`
          
          // Animate after delay
          setTimeout(() => {
            element.style.opacity = '1'
            element.style.transform = 'translate(0, 0)'
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
          }, delay)
        }
      })
    }

    animateElements()
  }, [])

  return (
    <div 
      id="home" 
      className="relative bg-gradient-to-br from-blue-600 to-indigo-800 pt-24 pb-32 overflow-hidden"
      style={{
        backgroundImage: "url('/images/pattern-bg.png')", 
        backgroundBlendMode: "overlay", 
        backgroundSize: "cover"
      }}
    >
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400 rounded-full opacity-10 mix-blend-multiply animate-blob"></div>
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-blue-300 rounded-full opacity-10 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-blue-500 rounded-full opacity-10 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="lg:mt-0 pt-4 md:pt-10 space-y-6">
            <div ref={headingRef}>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl leading-tight">
                Precision <span className="text-blue-200">Medical Billing</span> Solutions
              </h1>
            </div>
            
            <div ref={subheadingRef}>
              <p className="mt-4 text-lg text-blue-100 sm:mt-6 sm:text-xl md:text-2xl leading-relaxed">
                Transforming Healthcare Revenue Cycles with Expertise in Prior Authorization and Denial Management
              </p>
            </div>
            
            <div ref={ctaRef} className="space-y-4">
              <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#services" 
                  className="block w-full sm:w-auto py-4 px-8 rounded-lg shadow-lg 
                  bg-white text-blue-600 font-semibold text-center
                  hover:bg-blue-50 transition-all duration-300 
                  transform hover:scale-105 hover:shadow-xl"
                >
                  Explore Services
                </a>
                <a 
                  href="#contact" 
                  className="block w-full sm:w-auto py-4 px-8 rounded-lg shadow-lg 
                  bg-blue-500 bg-opacity-30 hover:bg-opacity-40 text-white font-semibold 
                  text-center border border-blue-200 hover:border-white 
                  transition-all duration-300 backdrop-blur-sm 
                  transform hover:scale-105 hover:shadow-xl"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
          
          <div ref={imageRef} className="mt-12 relative lg:mt-0">
            <div className="relative group">
              <img 
                className="w-full rounded-xl shadow-2xl object-cover 
                transition-transform duration-300 group-hover:scale-105" 
                src="/images/medical-billing-hero.jpg" 
                alt="Medical Billing Professionals Collaboration" 
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-xl bg-blue-900 bg-opacity-20"></div>
              
              {/* Professional Certification Badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-full shadow-xl p-4 
                flex items-center justify-center h-24 w-24 transform rotate-12 border-4 border-blue-600
                transition-all duration-300 hover:scale-110 hover:rotate-0" 
                aria-label="HIPAA Compliance Badge"
              >
                <div className="text-center transform -rotate-12">
                  <svg 
                    className="w-8 h-8 mx-auto text-blue-600 mb-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                    />
                  </svg>
                  <div className="text-xs font-semibold text-blue-800">HIPAA</div>
                  <div className="text-xs font-semibold text-blue-800">CERTIFIED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero