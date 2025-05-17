// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#2B6CB0',   // calm blue
        lightBlue: '#3182CE',     // hover blue
        bgGray: '#F7FAFC',        // very light gray background
        textGray: '#2D3748',      // dark gray for text
        textLightGray: '#718096'  // lighter gray text
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
}
