// src/pages/BlogPage.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import blogData from '../../data/blogData'

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  
  // Categories for filter buttons
  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'prior-auth', label: 'Prior Authorization' },
    { id: 'denial-management', label: 'Denial Management' },
    { id: 'revenue-cycle', label: 'Revenue Cycle' },
    { id: 'compliance', label: 'Compliance' }
  ]
  
  // Filter blogs when category or search term changes
  useEffect(() => {
    let filtered = blogData

    // Filter by category if not "all"
    if (activeCategory !== 'all') {
      filtered = filtered.filter(blog => blog.category === activeCategory)
    }
    
    // Filter by search term if present
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(term) || 
        blog.excerpt.toLowerCase().includes(term) ||
        blog.author.toLowerCase().includes(term)
      )
    }
    
    setFilteredBlogs(filtered)
    setCurrentPage(1) // Reset to first page whenever filters change
    
    // Scroll to top when changing categories
    window.scrollTo(0, 0)
  }, [activeCategory, searchTerm])
  
  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost)
  
  // Calculate page numbers
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage)
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }
  
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Blog Header */}
      <div className="bg-blue-600 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            MedBillPro Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expert insights, strategies, and updates to optimize your medical billing process
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 rounded-full border-none shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
        
        {/* Featured Blog (first item or can be specifically marked) */}
        {currentPosts.length > 0 && currentPage === 1 && (
          <div className="mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gray-200 h-64 md:h-auto relative">
                  <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full">
                    {currentPosts[0].category === 'prior-auth' ? 'Prior Authorization' : 
                     currentPosts[0].category === 'denial-management' ? 'Denial Management' :
                     currentPosts[0].category === 'revenue-cycle' ? 'Revenue Cycle' : 'Compliance'}
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{currentPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{currentPosts[0].readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {currentPosts[0].title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    {currentPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                        {currentPosts[0].author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{currentPosts[0].author}</p>
                        <p className="text-xs text-gray-500">{currentPosts[0].authorRole}</p>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${currentPosts[0].id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-lg inline-flex items-center transition-colors duration-300"
                    >
                      Read Full Article
                      <svg 
                        className="ml-2 w-5 h-5" 
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPage === 1 
            ? currentPosts.slice(1).map(renderBlogCard) 
            : currentPosts.map(renderBlogCard)}
        </div>
        
        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-600 mb-4">No articles found</h3>
            <p className="text-gray-500 mb-8">Try adjusting your search or filter to find what you're looking for.</p>
            <button 
              onClick={() => {setActiveCategory('all'); setSearchTerm('');}}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              View All Posts
            </button>
          </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 mx-1 rounded-md ${
                  currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Previous
              </button>
              
              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, index) => (
                <button 
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 mx-1 rounded-md ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 mx-1 rounded-md ${
                  currentPage === totalPages 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
      
      {/* Newsletter Signup */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated with MedBillPro</h3>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights on medical billing, prior authorization, 
            and revenue cycle management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow-md">
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  )
  
  // Helper function to render blog cards
  function renderBlogCard(blog) {
    return (
      <div 
        key={blog.id} 
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative h-48 bg-gray-200">
          <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full">
            {blog.category === 'prior-auth' ? 'Prior Authorization' : 
             blog.category === 'denial-management' ? 'Denial Management' :
             blog.category === 'revenue-cycle' ? 'Revenue Cycle' : 'Compliance'}
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
            
            <Link 
              to={`/blog/${blog.id}`}
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
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPage