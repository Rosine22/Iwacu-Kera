module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scale-up': 'scale-up 0.5s ease-in-out forwards',
        'text-color-change': 'text-color-change 0.5s ease-in-out forwards',
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        'text-color-change': {
          '30%': { color: 'black' },
          '100%': { color: 'blue' },
        },
      },
    },
  },
  plugins: [],
  
};
