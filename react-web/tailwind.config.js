/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'counterstrike':['Counter-Strike', 'sans-sherif']
      }, 
      colors: {
        csyellow: '#FBAD20',
        csblue: '#28397F',
        bg: '#3b415c'
      }
    },
  },
  plugins: [],
}

