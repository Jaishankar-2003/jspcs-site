import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0A0F1F',
          blue: '#0D6EFD',
          cyan: '#31C3F2',
          light: '#E4E9F2',
        },
        secondary: {
          dark: '#111827',
          gray: '#1F2937',
          sky: '#38BDF8',
        },
        accent: {
          green: '#22C55E',
          yellow: '#FACC15',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(49, 195, 242, 0.5), 0 0 10px rgba(49, 195, 242, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(49, 195, 242, 0.8), 0 0 30px rgba(49, 195, 242, 0.5)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config

