// src/pages/BlogPost.jsx
import { useEffect, useState, useRef } from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import blogData from '../../../src/data/blogData'

const BlogPost = () => {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()
  const contentRef = useRef(null)
  
  // Handle anchor scroll after content loads
  useEffect(() => {
    if (!isLoading && location.hash) {
      const id = location.hash.substring(1) // remove the # character
      const element = document.getElementById(id)
      if (element) {
        // Scroll to the element with a slight delay to ensure rendering
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [isLoading, location.hash])
  
  useEffect(() => {
    setIsLoading(true)
    
    // Simulate loading time (remove in production with real API)
    const timer = setTimeout(() => {
      // Find the current post
      const currentPost = blogData.find(blog => blog.id === parseInt(postId))
      
      if (!currentPost) {
        navigate('/blog')
        return
      }
      
      setPost(currentPost)
      
      // Find related posts (same category, excluding current)
      const related = blogData
        .filter(blog => blog.category === currentPost.category && blog.id !== currentPost.id)
        .slice(0, 3)
      setRelatedPosts(related)
      
      setIsLoading(false)
      
      // Scroll to top when post changes, but only if there's no hash
      if (!location.hash) {
        window.scrollTo(0, 0)
      }
    }, 500)
    
    return () => clearTimeout(timer)
  }, [postId, navigate, location.hash])
  
  // Process blog content to add IDs to headings for anchor links
  useEffect(() => {
    if (post && contentRef.current) {
      // Add IDs to all headings in the content for anchor navigation
      const headings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6')
      
      headings.forEach(heading => {
        if (!heading.id) {
          // Create an ID from the heading text
          const id = heading.textContent
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
          
          heading.id = id
          
          // Optionally, make the heading clickable to copy the link
          heading.style.cursor = 'pointer'
          heading.addEventListener('click', (e) => {
            e.preventDefault()
            const url = `${window.location.pathname}#${id}`
            navigate(url, { replace: true })
            
            // Optionally, add a visual indication that the URL was updated
            heading.classList.add('anchor-active')
            setTimeout(() => {
              heading.classList.remove('anchor-active')
            }, 1000)
          })
        }
      })
    }
  }, [post, navigate])
  
  if (isLoading) {
    return (
      <div className="pt-16 flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }
  
  if (!post) {
    return (
      <div className="pt-24 pb-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link 
          to="/blog" 
          className="text-blue-600 hover:underline"
        >
          Return to Blog
        </Link>
      </div>
    )
  }
  
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Blog Post Header */}
      <div className="bg-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            {post.category === 'prior-auth' ? 'Prior Authorization' : 
             post.category === 'denial-management' ? 'Denial Management' :
             post.category === 'revenue-cycle' ? 'Revenue Cycle' : 'Compliance'}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center text-blue-100 text-sm">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          
          <div className="flex items-center justify-center mt-6">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="ml-3 text-left">
              <p className="text-white font-medium">{post.author}</p>
              <p className="text-blue-200 text-sm">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="bg-white shadow-md mx-auto max-w-3xl -mt-10 rounded-lg overflow-hidden">
        <div className="h-72 bg-gray-200 relative">
          <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
        </div>
      </div>
      
      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Table of Contents (Optional) */}
        {post.showTableOfContents && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <div id="table-of-contents">
              {/* This will be automatically populated by JavaScript */}
            </div>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
          <div className="prose prose-lg max-w-none">
            {/* Render HTML content from the blog post with ref to access DOM */}
            <div 
              ref={contentRef} 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="anchor-headings" // Add a class for potential styling
            />
          </div>
          
          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 font-medium">Tags:</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer">
                {post.category === 'prior-auth' ? 'Prior Authorization' : 
                 post.category === 'denial-management' ? 'Denial Management' :
                 post.category === 'revenue-cycle' ? 'Revenue Cycle' : 'Compliance'}
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer">
                Medical Billing
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer">
                Healthcare
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer">
                Revenue Cycle
              </span>
            </div>
          </div>
          
          {/* Share Links */}
          <div className="mt-6 flex items-center">
            <span className="text-sm text-gray-600 font-medium mr-4">Share:</span>
            <div className="flex space-x-3">
              <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.3,8.559V9.007H18.3V13.7c0,0.198,0.197,0.198,0.197,0.198h1.512v3.297h-2.1 c-1.766,0-2.454-1.151-2.454-2.549V9.007h-1.144V6.05h1.144V3.298h3.2V6.05h1.709v2.957H18.3z"/>
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.5,7.258c-0.526,0.234-1.093,0.392-1.682,0.462c0.605-0.362,1.069-0.935,1.287-1.619 c-0.566,0.336-1.191,0.579-1.858,0.71c-0.533-0.568-1.293-0.924-2.136-0.924c-1.616,0-2.925,1.309-2.925,2.925 c0,0.229,0.026,0.452,0.076,0.666c-2.436-0.122-4.593-1.288-6.036-3.063C8.001,6.961,7.89,7.596,7.89,8.259 c0,1.015,0.516,1.911,1.301,2.434c-0.479-0.015-0.93-0.146-1.324-0.365v0.037c0,1.416,1.007,2.599,2.347,2.867 c-0.246,0.067-0.504,0.103-0.772,0.103c-0.189,0-0.372-0.019-0.551-0.053c0.373,1.161,1.451,2.008,2.729,2.033 c-0.999,0.784-2.258,1.249-3.628,1.249c-0.233,0-0.465-0.014-0.692-0.04c1.293,0.828,2.83,1.313,4.476,1.313 c5.379,0,8.317-4.454,8.317-8.317c0-0.127-0.003-0.252-0.009-0.378C20.593,8.359,21.102,7.839,21.5,7.258z"/>
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.547,19h-3.56V8.837h3.56V19z M6.761,7.19c-1.143,0-1.869-0.8-1.869-1.82c0-1.021,0.726-1.822,1.869-1.822 c1.144,0,1.843,0.801,1.843,1.822C8.604,6.39,7.905,7.19,6.761,7.19z M19.5,19h-3.544v-5.478c0-1.451-0.517-2.438-1.808-2.438 c-0.984,0-1.572,0.665-1.831,1.313c-0.095,0.226-0.117,0.55-0.117,0.872V19h-3.535c0,0,0.047-9.201,0-10.156h3.535v1.439 c0.475-0.694,1.326-1.674,3.217-1.674c2.346,0,4.083,1.532,4.083,4.823V19z"/>
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.1,4.5H3.9C2.85,4.5,2,5.35,2,6.4v11.2c0,1.05,0.85,1.9,1.9,1.9h16.2c1.05,0,1.9-0.85,1.9-1.9V6.4 C22,5.35,21.15,4.5,20.1,4.5z M20.1,17.6H3.9V8.3l7.35,4.9c0.5,0.35,1.1,0.35,1.5,0l7.35-4.9V17.6z M12,11.75L4.65,6.9h14.7 L12,11.75z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Author Bio */}
        <div className="mt-10 bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-2xl font-bold mb-4 md:mb-0 md:mr-6">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{post.author}</h3>
              <p className="text-gray-600 mb-3">{post.authorRole}</p>
              <p className="text-gray-700">
                With over 10 years of experience in healthcare revenue cycle management, 
                {post.author.split(' ')[0]} specializes in optimizing medical billing processes 
                and improving financial outcomes for healthcare providers of all sizes.
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16" id="related-posts">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <div 
                  key={related.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-40 bg-gray-200 relative">
                    <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-lg mb-2 leading-tight">
                      {related.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{related.date}</span>
                      <span className="mx-2">•</span>
                      <span>{related.readTime}</span>
                    </div>
                    <Link 
                      to={`/blog/${related.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                    >
                      Read Article
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Next/Previous Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between border-t border-gray-200 pt-6">
          {post.id > 1 && (
            <Link
              to={`/blog/${post.id - 1}`}
              className="flex items-center text-blue-600 hover:text-blue-800 mb-4 sm:mb-0"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Previous Article
            </Link>
          )}
          
          <Link
            to="/blog"
            className="px-5 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-center"
          >
            Back to All Articles
          </Link>
          
          {post.id < blogData.length && (
            <Link
              to={`/blog/${post.id + 1}`}
              className="flex items-center text-blue-600 hover:text-blue-800 mt-4 sm:mt-0"
            >
              Next Article
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          )}
        </div>
        
        {/* Comment Section (Placeholder) */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-6" id="comments">
          <h3 className="text-xl font-bold mb-6">Comments</h3>
          
          <div className="mb-8">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                JD
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h4 className="font-medium">John Doe</h4>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-700">
                  This article was incredibly helpful for our practice. We've been struggling with prior authorizations
                  and the strategies outlined here have already made a difference in our workflow.
                </p>
                <button className="mt-2 text-blue-600 text-sm hover:underline">Reply</button>
              </div>
            </div>
            
            <div className="flex items-start ml-12">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h4 className="font-medium">{post.author}</h4>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <p className="text-gray-700">
                  Thank you for your feedback, John! I'm glad to hear these strategies are working for your practice.
                  Feel free to reach out if you have any specific questions.
                </p>
                <button className="mt-2 text-blue-600 text-sm hover:underline">Reply</button>
              </div>
            </div>
          </div>
          
          {/* Comment Form */}
          <div>
            <h4 className="font-medium mb-4">Leave a Comment</h4>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all mb-4"
              rows="4"
              placeholder="Join the discussion..."
            ></textarea>
            <div className="flex flex-wrap gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 min-w-[200px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 min-w-[200px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="saveInfo" className="mr-2" />
              <label htmlFor="saveInfo" className="text-sm text-gray-600">
                Save my name and email for the next time I comment
              </label>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow-md">
              Post Comment
            </button>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-6" id="subscribe">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest insights on medical billing,
              prior authorization, and revenue cycle management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow-md whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section - Full Width */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Subscribe for More Insights</h3>
          <p className="text-gray-600 mb-8">
            Get the latest articles on medical billing, prior authorization, denial management,
            and revenue cycle optimization delivered directly to your inbox.
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
}

// Function to generate automatic table of contents (can be added to an effect)
function generateTableOfContents() {
  const contentDiv = document.querySelector('.prose')
  if (!contentDiv) return
  
  const headings = Array.from(contentDiv.querySelectorAll('h2, h3'))
  if (headings.length === 0) return
  
  const tocContainer = document.getElementById('table-of-contents')
  if (!tocContainer) return
  
  const toc = document.createElement('ul')
  toc.className = 'toc-list space-y-2'
  
  headings.forEach(heading => {
    const listItem = document.createElement('li')
    listItem.className = heading.tagName === 'H3' ? 'ml-4' : ''
    
    const link = document.createElement('a')
    link.href = `#${heading.id}`
    link.textContent = heading.textContent
    link.className = 'text-blue-600 hover:underline'
    
    listItem.appendChild(link)
    toc.appendChild(listItem)
  })
  
  tocContainer.appendChild(toc)
}

export default BlogPost