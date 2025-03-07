/** @type {import('tailwindcss').Config} */
export default {
    content: [ "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          primaryTitle: '#F4EEFF',
          primaryContent: '#DCD6F7',
          primarySubcontent: '#A6B1E1',
          primaryBase: '#A6B1E1',
          primaryAccent: '#DCD6F7',
          primaryBg: '#424874',
        },
      },
    },
    plugins: [],
  }