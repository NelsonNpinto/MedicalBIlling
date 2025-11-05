import React, { useState, useEffect } from 'react';

const TestimonialCard = ({ name, position, quote, rating }) => {
  return (
     <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 flex flex-col h-full group">
      {/* Quote mark */}
      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
        </svg>
      </div>
      
      {/* Star rating */}
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg 
            key={index} 
            className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      
      {/* Quote text */}
      <p className="text-gray-600 text-base leading-relaxed mb-4 flex-grow italic">"{quote}"</p>
      
      {/* Customer info */}
      <div className="border-t border-gray-200 pt-3">
        <h4 className="font-bold text-gray-900 text-base">{name}</h4>
        <p className="text-gray-600 text-sm">{position}</p>
      </div>
    </div>
  );
};

const CustomerReviews = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Medical Director",
      quote: "Since implementing their services, our physician burnout rate has decreased dramatically. Our doctors can now focus on patient care instead of paperwork. The ROI has been incredible.",
      rating: 5
    },
    {
      id: 2,
      name: "James Wilson",
      position: "Practice Manager",
      quote: "Their prior authorization service is a game-changer. We've seen a 47% increase in successful authorizations and our staff is much happier not dealing with insurance companies all day.",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      position: "Cardiologist",
      quote: "I used to spend hours documenting in our EHR. Now I save at least 10 hours weekly, which means I can see more patients and have a better work-life balance, also The ROI has been incredible.",
      rating: 4
    },
    {
      id: 4,
      name: "Lisa Rodriguez",
      position: "CFO",
      quote: "Our reimbursement rates have improved by 34% since partnering with them. Their team is responsive, professional, and truly understands the challenges of medical billing.",
      rating: 5
    },
    {
      id: 5,
      name: "Dr. Robert Mitchell",
      position: "Chief Medical Officer",
      quote: "The seamless EHR integration and denial management strategies have transformed our revenue cycle. We've recovered over $200K in previously denied claims.",
      rating: 5
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
   const [isMobile, setIsMobile] = useState(false);
  
  
  // Calculate total pages (2 cards per page, with last page showing remaining cards)
  const cardsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };
  
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const nextPage = () => {
    setIsAutoPlaying(false);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  
  const prevPage = () => {
    setIsAutoPlaying(false);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToPage = (pageIndex) => {
    setIsAutoPlaying(false);
    setCurrentPage(pageIndex);
  };

  // Get current testimonials for the page
  const startIndex = currentPage * cardsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 relative overflow-hidden">
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
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-200/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it. See how we've helped healthcare providers like you transform their practices.
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const pageStart = pageIndex * cardsPerPage;
                const pageTestimonials = testimonials.slice(pageStart, pageStart + cardsPerPage);
                
                return (
                  <div key={pageIndex} className="w-full flex-shrink-0 px-2">
                    <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                      {pageTestimonials.map((testimonial) => (
                        <TestimonialCard
                          key={testimonial.id}
                          name={testimonial.name}
                          position={testimonial.position}
                          quote={testimonial.quote}
                          rating={testimonial.rating}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 group"
            aria-label="Previous page"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 group"
            aria-label="Next page"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  currentPage === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              ></button>
            ))}
          </div>
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
            <span className="text-lg font-semibold mr-3">Join Our Happy Clients</span>
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
  );
};

export default CustomerReviews;