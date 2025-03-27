// src/components/Navbar.jsx
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll events for sticky navbar and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // For sticky navbar effect
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // For active section highlighting
      const sections = ['home', 'services', 'about', 'blog', 'contact']
      let currentSection = 'home'

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            currentSection = section
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Smooth scroll function for all navbar links
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      })
    }
  }

  // Active link style
  const getNavLinkClass = (section) => {
    const baseClass = "relative px-3 py-2 font-medium transition duration-300 ease-in-out"
    const activeClass = "text-blue-600"
    const inactiveClass = "text-gray-700 hover:text-blue-600"
    
    return `${baseClass} ${activeSection === section ? activeClass : inactiveClass}`
  }

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                className="h-10 w-auto transition-transform duration-300 hover:scale-105" 
                src="/images/logo.svg" 
                alt="MedBillPro Logo" 
              />
              <span className="ml-2 text-xl font-bold text-blue-600">MedBillPro</span>
            </div>
          </div>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a 
              href="#home" 
              className={getNavLinkClass('home')}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-bottom scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#services" 
              className={getNavLinkClass('services')}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('services')
              }}
            >
              Services
              {activeSection === 'services' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-bottom scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#about" 
              className={getNavLinkClass('about')}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              About Us
              {activeSection === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-bottom scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#blog" 
              className={getNavLinkClass('blog')}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('blog')
              }}
            >
              Blog
              {activeSection === 'blog' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-bottom scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#contact" 
              className={getNavLinkClass('contact')}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Contact Us
              {activeSection === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-bottom scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
            <a 
              href="#contact" 
              className="ml-3 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              type="button" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMenuOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M4 6h16M4 12h16M4 18h16"
                  } 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-72 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <a 
            href="#home" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'home' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            } transition-all duration-300`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
          >
            Home
          </a>
          <a 
            href="#services" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'services' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            } transition-all duration-300`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('services')
            }}
          >
            Services
          </a>
          <a 
            href="#about" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'about' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            } transition-all duration-300`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('about')
            }}
          >
            About Us
          </a>
          <a 
            href="#blog" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'blog' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            } transition-all duration-300`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('blog')
            }}
          >
            Blog
          </a>
          <a 
            href="#contact" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeSection === 'contact' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            } transition-all duration-300`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('contact')
            }}
          >
            Contact Us
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 mt-3 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('contact')
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar