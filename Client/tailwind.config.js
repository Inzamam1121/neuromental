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
        gradient3:"linear-gradient(180deg, #8B668B 0%, rgba(37, 27, 37, 0.7) 100%)",
        gradient4:"linear-gradient(180deg, rgba(139, 102, 139, 0.6) 0%, rgba(196, 196, 196, 0.94) 100%)",
        gradient5:"linear-gradient(180deg, #8B668B 0%, #B8C2CE 100%);",
      }
    },
  },
  plugins: [],
}

