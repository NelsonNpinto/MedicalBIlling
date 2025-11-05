// src/components/Navbar.jsx
import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Smart hide-on-scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSectionHeight = window.innerHeight * 0.8; // 80% of viewport height

      // Always show navbar at the very top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down past hero section
      else if (
        currentScrollY > heroSectionHeight &&
        currentScrollY > lastScrollY
      ) {
        setIsVisible(false);
      }
      // Show when scrolling up (any amount)
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle scroll events for section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Only track sections on home page
      if (location.pathname === '/') {
        const sections = ['home', 'services', 'about', 'blog', 'contact'];
        let currentSection = 'home';

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              currentSection = section;
            }
          }
        }

        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Set active based on location
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveSection('home');
    } else if (location.pathname.includes('/blog')) {
      setActiveSection('blog');
    }
  }, [location]);

  const toggleMenu = () => {
  if (isMenuOpen) {
    // When closing, hide menu content first, then change shape
    setIsMenuOpen(false);
  } else {
    // When opening, change shape immediately
    setIsMenuOpen(true);
  }
};

  // Smooth scroll function for home page sections
  const scrollToSection = sectionId => {
    setIsMenuOpen(false);

    // Only do smooth scroll on home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 120,
          behavior: 'smooth',
        });
      }
    }
  };

  // Active link style
  const getNavLinkClass = section => {
    const baseClass =
      'relative px-4 py-2 text-[14px] font-semibold transition-all duration-300 ease-in-out rounded-lg';
    const activeClass = 'text-gray-800 bg-gray-100';
    const inactiveClass = 'text-gray-800 hover:text-gray-900 hover:bg-gray-50';

    return `${baseClass} ${
      activeSection === section ? activeClass : inactiveClass
    }`;
  };

  return (
  <nav
  className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-100% lg:w-auto w-[95%] bg-white/95 backdrop-blur-md shadow-xl rounded-3xl border border-gray-200/20 ${
    isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
  }`}
  style={{
    boxShadow:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
  }}>
      <div className="px-1 py-1">
        <div className="flex justify-between items-center">
          {/* Text Logo */}
          <div className="flex items-center mr-8 ml-4">
            <Link
              to="/"
              className="flex-shrink-0 flex flex-col items-start group">
              <div className="transition-transform duration-300 group-hover:scale-105 text-center">
                <h1
                  className="text-[15px] font-bold leading-none"
                  style={{color: '#003d6b'}}>
                  AIQuantTech
                </h1>
                <p
                  className="text-[10px] leading-none mt-0.5"
                  style={{color: '#003d6b'}}>
                  healthcare solutions
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2 flex-1 justify-center">
            <Link
              to="/"
              className={getNavLinkClass('home')}
              onClick={e => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  scrollToSection('home');
                }
              }}>
              Home
            </Link>
            <Link
              to="/#services"
              className={getNavLinkClass('services')}
              onClick={e => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  window.location.href = '/#services';
                } else {
                  scrollToSection('services');
                }
              }}>
              Services
            </Link>
            <Link
              to="/#about"
              className={getNavLinkClass('about')}
              onClick={e => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  window.location.href = '/#about';
                } else {
                  scrollToSection('about');
                }
              }}>
              About Us
            </Link>
            <Link to="/blog" className={getNavLinkClass('blog')}>
              Blog
            </Link>

            {/* CTA Button */}
            <Link
              to="/#contact"
              className="ml-4 px-4 py-2.5 rounded-full text-[15px] transition-all duration-300 transform hover:scale-105 text-white shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: '#007aff',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = '#0056cc';
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = '#007aff';
              }}
              onClick={e => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  window.location.href = '/#contact';
                } else {
                  scrollToSection('contact');
                }
              }}>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="transition-colors duration-300 p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
              aria-label="Toggle menu">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          maxHeight: isMenuOpen ? '320px' : '0px',
          transition: 'max-height 0.3s ease-out, opacity 0.2s ease-out',
          transformOrigin: 'top',
        }}>
        <div
          className="px-6 pt-2 pb-6 space-y-2 border-t bg-white/95 backdrop-blur-md border-gray-200/20"
          style={{
            transform: isMenuOpen ? 'scaleY(1)' : 'scaleY(0)',
            transformOrigin: 'top',
            transition: 'transform 0.3s ease-out',
          }}>
          <Link
            to="/"
            className={`block px-4 py-3 rounded-lg text-[14px] font-semibold transition-all duration-300 ${
              activeSection === 'home'
                ? 'text-gray-800 bg-gray-100'
                : 'text-gray-800 hover:text-gray-900 hover:bg-gray-50'
            }`}
            style={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            }}
            onClick={e => {
              if (location.pathname === '/') {
                e.preventDefault();
                scrollToSection('home');
              }
              setIsMenuOpen(false);
            }}>
            Home
          </Link>
          <Link
            to="/#services"
            className={`block px-4 py-3 rounded-lg text-[14px] font-semibold transition-all duration-300 ${
              activeSection === 'services'
                ? 'text-gray-800 bg-gray-100'
                : 'text-gray-800 hover:text-gray-900 hover:bg-gray-50'
            }`}
            style={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            }}
            onClick={e => {
              e.preventDefault();
              if (location.pathname !== '/') {
                window.location.href = '/#services';
              } else {
                scrollToSection('services');
              }
              setIsMenuOpen(false);
            }}>
            Services
          </Link>
          <Link
            to="/#about"
            className={`block px-4 py-3 rounded-lg text-[14px] font-semibold transition-all duration-300 ${
              activeSection === 'about'
                ? 'text-gray-800 bg-gray-100'
                : 'text-gray-800 hover:text-gray-900 hover:bg-gray-50'
            }`}
            style={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            }}
            onClick={e => {
              e.preventDefault();
              if (location.pathname !== '/') {
                window.location.href = '/#about';
              } else {
                scrollToSection('about');
              }
              setIsMenuOpen(false);
            }}>
            About Us
          </Link>
          <Link
            to="/blog"
            className={`block px-4 py-3 rounded-lg text-[14px] font-semibold transition-all duration-300 ${
              activeSection === 'blog'
                ? 'text-gray-800 bg-gray-100'
                : 'text-gray-800 hover:text-gray-900 hover:bg-gray-50'
            }`}
            style={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <Link
            to="/#contact"
            className="block px-4 py-3 mt-4 rounded-lg text-[14px] font-semibold text-center transition-all duration-300 text-white shadow-lg"
            style={{
              backgroundColor: '#007aff',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = '#0056cc';
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = '#007aff';
            }}
            onClick={e => {
              e.preventDefault();
              if (location.pathname !== '/') {
                window.location.href = '/#contact';
              } else {
                scrollToSection('contact');
              }
              setIsMenuOpen(false);
            }}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
