const ServiceModal = ({ service, onClose }) => {
  if (!service) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-t-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center">
              {service.icon}
            </div>
            <h2 className="text-3xl font-bold text-white">{service.title}</h2>
          </div>
          <p className="text-blue-100 text-lg">{service.fullDescription}</p>
        </div>
        
        {/* Content */}
        <div className="p-8">
          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Why Choose Our Service?
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">{service.whyChoose}</p>
            </div>
          </div>
          
          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer CTA */}
        <div className="bg-gray-50 p-6 rounded-b-2xl border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-semibold">Ready to transform your revenue cycle?</p>
            <a
              href="#contact"
              onClick={onClose}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}