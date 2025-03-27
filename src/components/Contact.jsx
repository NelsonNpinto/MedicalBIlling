import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
    // Clear any previous errors when user starts typing
    if (submitError) setSubmitError(null)
  }

  const validateForm = () => {
    const { name, email, message } = formData
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setSubmitError('Please enter a valid email address.')
      return false
    }

    // Optional phone validation if provided
    if (formData.phone && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(formData.phone)) {
      setSubmitError('Please enter a valid phone number.')
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Reset previous states
    setSubmitError(null)
    setSubmitSuccess(false)
    
    // Validate form
    if (!validateForm()) return

    // Start submission process
    setIsSubmitting(true)

    try {
      // Simulated API call - replace with actual backend submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Submission failed. Please try again.')
      }

      // Reset form on successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })

      // Show success state
      setSubmitSuccess(true)
    } catch (error) {
      // Handle submission errors
      setSubmitError(error.message || 'An unexpected error occurred.')
    } finally {
      // Always reset submitting state
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to optimize your medical billing process? Our experts are here to provide tailored solutions for your healthcare revenue challenges.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
          <div className="p-8 sm:p-12">
            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                {submitError}
              </div>
            )}

            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                Thanks for your message! Our team will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md 
                    shadow-sm focus:ring-blue-500 focus:border-blue-500 
                    transition duration-300 ease-in-out 
                    hover:border-blue-500" 
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md 
                    shadow-sm focus:ring-blue-500 focus:border-blue-500 
                    transition duration-300 ease-in-out 
                    hover:border-blue-500" 
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md 
                  shadow-sm focus:ring-blue-500 focus:border-blue-500 
                  transition duration-300 ease-in-out 
                  hover:border-blue-500" 
                  placeholder="+1 (555) 123-4567"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md 
                  shadow-sm focus:ring-blue-500 focus:border-blue-500 
                  transition duration-300 ease-in-out 
                  hover:border-blue-500" 
                  placeholder="Share your medical billing challenges or inquiry..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <div>
                <button 
                  type="submit" 
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-700 
                  text-white font-semibold rounded-md shadow-xl 
                  hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-blue-500 transition duration-300 
                  transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              We respect your privacy. Your information is secure and will only be used to respond to your inquiry.
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-16 max-w-3xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <svg className="w-12 h-12 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div>
            <svg className="w-12 h-12 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600">support@priorauthpro.com</p>
          </div>
          <div>
            <svg className="w-12 h-12 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Address</h3>
            <p className="text-gray-600">123 Medical Lane, Suite 450</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact