/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffd900',
        secondary: '#004ee6',
        cream: '#f9f6ed',
        'benefit-blue': '#134DDE',
        'accent-blue': '#cddef9',
        'accent-blue-light': '#e6f0ff',
        'accent-blue-card': '#b5d0f8',
        'link-blue': '#535cfa',
        'heading-active': '#0a4b8f',
        charcoal: '#1b1b1b',
        'dark-gray': '#121212',
        'medium-gray': '#2e2e2e',
        'body-gray': '#333333',
        'light-gray': '#d8d8d8',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
