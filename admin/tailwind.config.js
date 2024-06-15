/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
          pop:"Poppins"
      },
      boxShadow:{ 
      shadow1:  "0px 4px 22px 0px #00000014",
      shadowcart:"0px 4px 28px 0px #00000040",
      shadowheader:'0px 4px 28px 0px #00000040',
      shadowimage:'0px 4px 5px 0px #00000078'
      },
      backgroundImage:{
        gradientbtn:'linear-gradient(90deg, #918EAF 0%, rgba(0, 0, 0, 0.68) 100%)',
        gradientred:'linear-gradient(90deg, #D92550 0%, #B72C2C 100%)'
      }

    },
  },
  plugins: [],
}

