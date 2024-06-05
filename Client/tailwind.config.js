/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pop:"Poppins",
        Head:"Montserrat"
      },
      colors:{
        mainpurple:"#8B668B"
      },
      backgroundImage:{
        gradient3:"linear-gradient(180deg, #8B668B 0%, rgba(37, 27, 37, 0.7) 100%)"

      }
    },
  },
  plugins: [],
}

