/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '10rem'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',

      primary: {
        600: '#996830',
        300: '#C4A386',
        100: '#E6D8CC'
      },

      neutral: {
        900: '#2C2C2C',
        700: '#444444',
        500: '#7C7C7C',
        300: '#D9D9D6',
        100: '#E5E5E5'
      },

      musgo: {
        500: '#878B70',
        400: '#666955',
        300: '#E1E8BC',
        200: '#EEF5C6',
        100: '#C9CFA7'
      },

      marrom: {
        500: '#9D8255',
        400: '#695638',
        300: '#E8BF7D',
        200: '#F5CA84',
        100: '#CFAA70'
      },

      pele: {
        500: '#CEBA9F',
        400: '#695E51',
        300: '#E8D1B3',
        200: '#F5DCBC',
        100: '#CFBA9F'
      },

      bege: {
        500: '#EEEBE4',
        400: '#696764',
        300: '#E8E5DF',
        200: '#F5F2EB',
        100: '#CFCCC6'
      },

      gray: {
        800: '#9D8255',
        400: '#CEBA9F',
        200: '#878B70',
        100: '#EEEBE4'
      }
    },
    fontFamily: {
      display: ['Montserrat, sans-serif'],
      body: ['Outfit', 'sans-serif']
    },
    fontSize: {
      'display-2xl': [
        '72px',
        {
          letterSpacing: '-0.025em',
          lineHeight: '96px'
        }
      ],
      'display-xl': [
        '60px',
        {
          letterSpacing: '-0.025em',
          lineHeight: '72px'
        }
      ],
      'display-lg': [
        '48px',
        {
          letterSpacing: '0em',
          lineHeight: '60px'
        }
      ],
      'display-md': [
        '36px',
        {
          letterSpacing: '0em',
          lineHeight: '48px'
        }
      ],
      'display-sm': [
        '30px',
        {
          letterSpacing: '0em',
          lineHeight: '40px'
        }
      ],
      'display-xs': [
        '24px',
        {
          letterSpacing: '0em',
          lineHeight: '32px'
        }
      ],
      'body-xl': [
        '20px',
        {
          letterSpacing: '0em',
          lineHeight: '32px'
        }
      ],
      'body-lg': [
        '18px',
        {
          letterSpacing: '0em',
          lineHeight: '32px'
        }
      ],
      'body-md': [
        '16px',
        {
          letterSpacing: '0em',
          lineHeight: '24px'
        }
      ],
      'body-sm': [
        '14px',
        {
          letterSpacing: '0em',
          lineHeight: '24px'
        }
      ],
      'body-xs': [
        '12px',
        {
          letterSpacing: '0em',
          lineHeight: '16px'
        }
      ]
    },
    boxShadow: {
      xs: '0px 1px 2px rgba(17, 24, 39, 0.05)',
      sm: '0px 1px 3px rgba(17, 24, 39, 0.1), 0px 1px 2px rgba(17, 24, 39, 0.06)',
      md: '0px 4px 8px -2px rgba(17, 24, 39, 0.1), 0px 2px 4px -2px rgba(17, 24, 39, 0.06)',
      lg: '0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)',
      xl: '0px 20px 24px -4px rgba(17, 24, 39, 0.1), 0px 8px 8px -4px rgba(17, 24, 39, 0.04)',
      '2xl': '0px 24px 48px -12px rgba(17, 24, 39, 0.25)'
    },
    extend: {
      spacing: {
        18: '72px',
        22: '88px',
        30: '120px',
        62: '248px'
      }
    }
  },
  plugins: []
}
