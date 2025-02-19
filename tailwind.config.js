/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ai-green': '#00FF9D',
        'space-black': '#0A0A0F',
        'terminal-gray': '#2A2A2F',
        'frost-white': '#F8F9FC',
        'neural-purple': '#7C3AED',
        'deep-blue': '#2563EB',
        'success-green': '#34D399'
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'code': ['JetBrains Mono', 'monospace']
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'matrix-fade': 'matrixFade 20s linear infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        matrixFade: {
          '0%': { opacity: '0.1' },
          '50%': { opacity: '0.3' },
          '100%': { opacity: '0.1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};