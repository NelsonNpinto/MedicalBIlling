import { brandNames } from '../../styles/names'
import heroImage from '../../assets/images/hero.png'

const Hero = () => {
  return (
    <div 
      id="home" 
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '100vh'
      }}
    >
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated background shapes with adjusted opacity for sky theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full opacity-10 mix-blend-multiply animate-blob"></div>
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-blue-200 rounded-full opacity-10 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-blue-300 rounded-full opacity-10 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="mx-5 px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-8 lg:space-y-10">
            <div>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight">
             <span className="drop-shadow-2xl" style={{color: '#003d6b'}}>{brandNames.tagline.split(' ').slice(0, 1)}</span>{' '}
                <span className="text-white/90 drop-shadow-2xl">{brandNames.tagline.split(' ').slice(1).join(' ')}</span>
              </h1>
            </div> 
            
            <div>
              <p className="text-[18px] text-white/90 leading-relaxed font-medium drop-shadow-lg">
                {brandNames.subtitle}
              </p>
            </div>
            
            <div className="space-y-5">
              <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-5">
                <a 
                  href="#services" 
                  className="block w-full sm:w-auto py-4 px-8 rounded-lg shadow-lg 
                  bg-white/95 backdrop-blur-sm text-blue-600 font-semibold text-center text-[16px]
                  hover:bg-white transition-all duration-300 
                  transform hover:scale-105 hover:shadow-xl border border-white/20"
                >
                  Explore Services
                </a>
                <a 
                  href="#contact" 
                  className="block w-full sm:w-auto py-4 px-8 rounded-lg shadow-lg 
                  bg-gradient-to-r from-blue-500/90 to-blue-600/90 backdrop-blur-sm text-white font-semibold 
                  text-center text-[16px] hover:from-blue-600 hover:to-blue-700
                  transition-all duration-300 
                  transform hover:scale-105 hover:shadow-xl border border-white/20"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
          
       
        </div>
      </div>
    </div>
  )
}

export default Hero