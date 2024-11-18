/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      bgColor : "#090929" ,
      textColor : "#FFFFFF" ,
      accentColor : "#0ABAB5" ,
      buttonHighligths : "#14D9CC " ,
      transparentBgColor : "#05051333"
    } ,
  },
  plugins: [],
}