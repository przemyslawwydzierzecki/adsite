/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,cjs}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '10px',
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto Flex', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans'],
        robotoCondensed: ['Roboto Condensed'],
      },
      colors: {
        mainColor: '#282828',
      },
    },
  },
  plugins: [
  
  ]
}

