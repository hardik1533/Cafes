/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f4',
          100: '#E8DCCF',
          200: '#e5cdb5',
          300: '#dfb791',
          400: '#d7a166',
          500: '#C89B6D',
          600: '#b08154',
          700: '#91653e',
          800: '#755032',
          900: '#5a3d25',
        },
        dark: {
          900: '#0F0F0F',
          800: '#1B1B1B',
          700: '#2A2A2A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
