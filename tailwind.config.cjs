/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 55s linear infinite',
        'bouce-2': 'bounce 1s infinite',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.5rem',
          md: '2.5rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '3rem',
        },
      },
      fontFamily: {
        display: ['Montserrat, sans-serif'],
        display2: ['Work Sans, sans-serif'],
        body: ['Outfit', 'sans-serif'],
        fontAbout: ['FontAbout'],
      },
      backgroundImage: {
        'hero-pattern': "url('/works/hero-home.jpg')",
        'service-pattern': "url('/Helps/bg-services.svg')",
        'service-pattern2': "url('/Helps/wave4.svg')",
        'faq-pattern': "url('/Helps/fundo20.svg')",
      },
      zIndex: {
        100: '100',
      },
      spacing: {
        18: '72px',
        22: '88px',
        30: '120px',
        62: '248px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FFFFFF',
        black: '#000000',
        twice: '#F3F3F3',

        baseVerde: '#8C8B75',
        baseBege: '#D2D1CC',
        baseCinza: '#525154',

        card: '#4E4E4E',

        verde: {
          600: '#C0C0B4',
          500: '#B7B5A8',
          400: '#AAAB9B',
          300: '#A1A08E',
          200: '#979682',
          100: '#8C8B75',
        },

        bege: {
          600: '#E6E6E4',
          500: '#E2E2E0',
          400: '#DEDFDA',
          300: '#DAD9D5',
          200: '#D6D5D1',
          100: '#D2D1CC',
        },

        cinza: {
          600: '#A1A1A3',
          500: '#919193',
          400: '#818183',
          300: '#717173',
          200: '#626264',
          100: '#525154',
        },
      },
    },
  },
  plugins: [],
}
