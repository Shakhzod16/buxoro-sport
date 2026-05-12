import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A3C6B',
          light: '#2563EB',
          dark: '#0F2447',
        },
        accent: {
          DEFAULT: '#E63946',
          gold: '#F4A419',
        },
        neutral: {
          bg: '#F5F7FA',
          border: '#E2E8F0',
          text: '#2D3748',
          muted: '#718096',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
