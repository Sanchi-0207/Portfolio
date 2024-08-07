const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'minus-20': 'calc(100vh - 28px)',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fall: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(75%)', opacity: 1 },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideUpFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideUp: 'slideUp 1s ease-in-out',
        fall: 'fall 0.7s ease-in-out forwards',
        shimmer: 'shimmer 2s linear infinite',
        scroll: 'scroll 10s linear infinite',
        slideUpFadeIn: 'slideUpFadeIn 0.5s ease-in-out',
      },
      colors: {
        'bg-color': '#121212',
        'custom-green': '#50724B',
        'custom-white': '#EBEBEB',
        'custom-black': '#1C1C1C',
        'custom-pink': '#CA5A89',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
