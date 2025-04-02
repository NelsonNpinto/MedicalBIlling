import React, { useState } from 'react';

const TestimonialCard = ({ name, position, company, quote, rating, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Quote mark */}
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
        </svg>
      </div>
      
      {/* Star rating */}
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg 
            key={index} 
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      
      {/* Quote text */}
      <p className="text-gray-600 italic mb-5">{quote}</p>
      
      {/* Customer info */}
      <div className="flex items-center">
       
        <div>
          <h4 className="font-semibold text-indigo-800">{name}</h4>
          <p className="text-sm text-gray-500">{position}, {company}</p>
        </div>
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
    //   company: "Westside Family Practice",
      quote: "Since implementing their services, our physician burnout rate has decreased dramatically. Our doctors can now focus on patient care instead of paperwork. The ROI has been incredible.",
      rating: 5,
      image: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "James Wilson",
      position: "Practice Manager",
    //   company: "Metro Health Associates",
      quote: "Their prior authorization service is a game-changer. We've seen a 47% increase in successful authorizations and our staff is much happier not dealing with insurance companies all day.",
      rating: 5,
      image: "/images/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      position: "Cardiologist",
    //   company: "Heart Health Specialists",
      quote: "I used to spend hours documenting in our EHR. Now I save at least 10 hours weekly, which means I can see more patients and have a better work-life balance, also The ROI has been incredible",
      rating: 4,
      image: "/images/testimonial-3.jpg"
    },
    {
      id: 4,
      name: "Lisa Rodriguez",
      position: "CFO",
    //   company: "Northside Medical Group",
      quote: "Our reimbursement rates have improved by 34% since partnering with them. Their team is responsive, professional, and truly understands the challenges of medical billing.",
      rating: 5,
      image: "/images/testimonial-4.jpg"
    }
  ];
  
  // For mobile carousel
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Don't just take our word for it. See how we've helped healthcare providers like you transform their practices.
          </p>
        </div>
        
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              quote={testimonial.quote}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <TestimonialCard
              name={testimonials[activeIndex].name}
              position={testimonials[activeIndex].position}
              company={testimonials[activeIndex].company}
              quote={testimonials[activeIndex].quote}
              rating={testimonials[activeIndex].rating}
              image={testimonials[activeIndex].image}
            />
            
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 focus:outline-none"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`block w-2 h-2 rounded-full ${
                      activeIndex === index ? 'bg-indigo-700' : 'bg-gray-300'
                    }`}
                  ></span>
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 focus:outline-none"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-700 
            text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl 
            transition-all duration-300 transform hover:scale-105 
            focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-indigo-500"
            aria-label="Schedule a consultation"
          >
            <span className="text-lg font-semibold mr-3">Join Our Happy Clients</span>
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
  );
};

export default CustomerReviews;