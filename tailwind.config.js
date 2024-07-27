const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
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

