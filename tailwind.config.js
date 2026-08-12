/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          300: '#93C5FD',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A8A'
        },
        background: '#F8FAFC',
        surface: '#FFFFFF',
        text: {
          primary: '#1E293B',
          secondary: '#64748B'
        }
      }
    }
  },
  plugins: [daisyui],
};
