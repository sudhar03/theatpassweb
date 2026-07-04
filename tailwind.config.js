/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
          950: '#0A1829',
        },
        gold: {
          50: '#FDFBF7',
          100: '#FAF4E3',
          200: '#F3E5BE',
          300: '#EAD393',
          400: '#E0BE69',
          500: '#D4A853',
          600: '#B58B3D',
          700: '#916E2E',
          800: '#6E5220',
          900: '#4C3714',
        },
        ivory: {
          50: '#FDFDFB',
          100: '#FAF9F5',
          200: '#F5F2EB',
          350: '#EBE6DA',
        },
        hero: {
          bg: '#FAF9F5',
          gradient: 'linear-gradient(135deg, #FAF9F5 0%, #F5F2EB 50%, #EBE6DA 100%)',
        },
        dark: {
          bg: '#050B14',
          card: '#0C1322',
          text: '#F8FAFC',
          muted: '#94A3B8',
        },
        cta: {
          purple: '#102A43', // we map cta-purple to deep navy to keep code backward compatible
          hover: '#0A1829',
          gold: '#D4A853',
          'gold-hover': '#B58B3D',
        },
        text: {
          dark: '#102A43',
          muted: '#486581',
        },
        border: {
          default: 'rgba(20, 42, 67, 0.12)',
          light: 'rgba(20, 42, 67, 0.06)',
          gold: 'rgba(212, 168, 83, 0.25)',
        },
        placeholder: {
          bg: '#FAF9F5',
          border: '#D9E2EC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '32px',
      },
      maxWidth: {
        'content': '1240px',
      },
      spacing: {
        'section': '120px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounceSlow 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient-x': 'gradientX 3s ease infinite',
        'gradient-y': 'gradientY 3s ease infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'spin-slow': 'spinSlow 12s linear infinite',
        'flip-in': 'flipIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        gradientY: {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        spinSlow: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23102A43' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'dots-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4A853' fill-opacity='0.06' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
