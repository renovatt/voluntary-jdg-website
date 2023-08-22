/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          950: '#002550',
          800: '#025A9A',
          400: '#00EBF0',
          500: '#18cba2',
          DEFAULT: '#00EBF0',
        },
        secondary: {
          950: '#0A0A0A',
          900: '#171717',
          800: '#262626',
          500: '#7D7A7A',
          50: '#FAFAFA',
          DEFAULT: '#FAFAFA',
        },
      },
      backgroundColor: {
        primary: {
          DEFAULT: '#222223',
        },
      },
      keyframes: {
        mobileActive: {
          from: {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        faq: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        mobileActive: 'mobileActive .3s ease-in',
        faq: 'faq .3s ease-in',
      },
    },
  },
  plugins: [],
}
