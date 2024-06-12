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
        Head:"Montserrat",
        ruda:'Ruda'
      },
      colors:{
        mainpurple:"#8B668B"
      },
      backgroundImage:{
        gradient3:"linear-gradient(180deg, #8B668B 0%, rgba(37, 27, 37, 0.7) 100%)",
        gradient4:'background: #7370907A'

      },
      boxShadow:{
        shadow: "0px 141px 200px -80px #8B668B4D",
        shadow1:'0px 1px 7px 0px #00000040'

      }
    },
  },
  plugins: [],
}

