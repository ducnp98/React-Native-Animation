/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '8/10': '80%',
      }
    },
  },
  plugins: [],
}

