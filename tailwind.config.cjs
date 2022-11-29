/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 55s linear infinite',
        'bouce-2': 'bounce 1s infinite'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          md: '2.5rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '3rem'
        }
      },
      fontFamily: {
        display: ['Montserrat, sans-serif'],
        display2: ['Work Sans, sans-serif'],
        body: ['Outfit', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/works/home4.svg')",
        mobile: "url('/works/mobile7.svg')",
        home2: "url('/works/bg-home2.svg')",
        'img-service': "url('/works/herosection.svg')",
        'footer-texture': "url('/img/footer-texture.png')"
      },
      zIndex: {
        100: '100'
      },
      spacing: {
        18: '72px',
        22: '88px',
        30: '120px',
        62: '248px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FFFFFF',
        black: '#000000',
        twice: '#F3F3F3',

        base0: '#FBF7F4',
        base1: '#8C8B75',
        base2: '#D2D1CC',
        base3: '#525254',

        card: '#4E4E4E',

        cor1: '#7F523F',
        cor2: '#A06D4E',

        brown: {
          600: '#C0C0B4',
          500: '#B7B5A8',
          400: '#AAAB9B',
          300: '#A1A08E',
          200: '#979682',
          100: '#8C8B75'
        },

        neutral: {
          600: '#E6E6E4',
          500: '#E2E2E0',
          400: '#DEDFDA',
          300: '#DAD9D5',
          200: '#D6D5D1',
          100: '#D2D1CC'
        },

        gray: {
          600: '#A1A1A3',
          500: '#919193',
          400: '#818183',
          300: '#717173',
          200: '#626264',
          100: '#525254'
        }
      }
    }
  },
  plugins: []
}
