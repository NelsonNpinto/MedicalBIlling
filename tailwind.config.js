/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blob': 'blob 7s infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'slide-in-top': 'slideInTop 0.7s ease-out forwards',
        'slide-in-bottom': 'slideInBottom 0.7s ease-out forwards',
        'pulse-slow': 'pulse 5s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(50px, 50px) scale(1.2)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        slideInTop: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(-50px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        slideInBottom: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(50px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      rotate: ['group-hover'],
    }
  },
  plugins: [],
}