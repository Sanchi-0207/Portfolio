const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      "animation": {
            shimmer: "shimmer 2s linear infinite"
          },
          "keyframes": {
            shimmer: {
              from: {
                "backgroundPosition": "0 0"
              },
              to: {
                "backgroundPosition": "-200% 0"
              }
            }
          },

      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(3/4)', opacity: 1 },
        },
      },
      animation: {
        fall: 'fall 0.7s ease-in-out forwards',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      colors: {
        'bg-color': '#121212', 
        'custom-green': '#50724B', 
        'custom-white':'#EBEBEB',
        'custom-black':'#1C1C1C',
        'custom-pink':'#CA5A89',
      },
      
      fontFamily: {
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        poppins: ['Poppins', 'sans-serif'],
      },
      
    },
   
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

