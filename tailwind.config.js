/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      content: {
        "shape-mark": 'url("/assets/shape-mark.svg")',
        "shape-mark-lg": 'url("/assets/shape-mark-big.svg")',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        "main-title": "4rem",
      },
      lineHeight: {
        "70": "70px"
      }
    },
    colors: {
      'white': "#FFFFFF",
      'gray-light': "#F5F5F5",
      'gray-1': "#F0F0F0",
      'gray-2': "#E0E0E0",
      'gray-3': "#CCCCCC",
      'gray-4': "#B8B8B8",
      'gray-5': "#A3A3A3",
      'gray-6': "#8F8F8F",
      'gray-7': "#7A7A7A",
      'gray-8': "#666666",
      'gray-9': "#525252",
      'gray-10': "#3D3D3D",
      'gray-11': "#292929",
      'gray-dark': "#141414",
      "pb-light": "#AFD3E2",
      "pb": "#19A7CE",
      "pb-dark": "#146C94",
      "black": "#000000"
    }
  },
  plugins: [],
}
