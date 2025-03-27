// src/components/Blog.jsx
import { useState } from 'react'

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const blogs = [
    {
      id: 1,
      title: "Navigating the Complexities of Prior Authorization in 2025",
      category: "prior-auth",
      date: "March 15, 2025",
      excerpt: "With increasing regulatory changes, healthcare providers face new challenges in prior authorization processes. Learn effective strategies to streamline workflows and improve approval rates.",
      author: "Dr. Sarah Johnson",
      authorRole: "Healthcare Policy Specialist",
      image: "/images/blog/prior-auth-workflow.jpg",
      readTime: "7 min read",
    },
    {
      id: 2,
      title: "5 Key Strategies to Reduce Claim Denials in Medical Billing",
      category: "denial-management",
      date: "February 28, 2025",
      excerpt: "Claim denials cost healthcare providers millions annually. Discover proactive approaches to identify common denial patterns and implement preventative measures to boost revenue.",
      author: "Michael Rodriguez",
      authorRole: "Revenue Cycle Manager",
      image: "/images/blog/claim-denials.jpg",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "AI-Powered Prior Authorization: The Future of Medical Billing",
      category: "prior-auth",
      date: "January 22, 2025",
      excerpt: "Artificial intelligence is revolutionizing how healthcare providers handle prior authorizations. Explore how machine learning algorithms can predict approval likelihood and automate submissions.",
      author: "Tanya Williams",
      authorRole: "Healthcare Tech Analyst",
      image: "/images/blog/ai-medical-billing.jpg",
      readTime: "8 min read",
    },
  ]

  const filteredBlogs = activeCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory)

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'prior-auth', label: 'Prior Authorization' },
    { id: 'denial-management', label: 'Denial Management' },
  ]

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Latest Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert articles and resources to help you navigate the complexities of medical billing,
            prior authorization, and denial management.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map(blog => (
            <div 
              key={blog.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {blog.category === 'prior-auth' ? 'Prior Authorization' : 'Denial Management'}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-5">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                      {blog.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{blog.author}</p>
                      <p className="text-xs text-gray-500">{blog.authorRole}</p>
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center transition-colors duration-300"
                  >
                    Read More
                    <svg 
                      className="ml-1 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View All Articles
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog