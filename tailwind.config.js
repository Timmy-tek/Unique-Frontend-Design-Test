/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F5F5F3',
        shell: '#55534E',
        surface: '#F7F5EF',
        card: '#FFFFFF',
        'text-primary': '#1E1E1E',
        'text-secondary': '#7D7D7D',
        border: '#E8E6DF',
        timeline: '#D9D7D1',
        accent: '#E8EB2A',
        darkbtn: '#2B2B2B',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 4px rgba(0,0,0,0.03), 0 10px 30px rgba(0,0,0,0.04)',
        floating: '0 8px 24px rgba(0,0,0,0.08)',
        pill: '0 2px 6px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}
