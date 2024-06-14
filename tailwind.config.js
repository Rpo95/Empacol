/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
      },
      textStrokeWidth: {
        'default': '1px',
        'md': '2px',
        'lg': '3px',
      },
      textStrokeColor: {
        'black': '#000000',
        'white': '#FFFFFF',
        // Agrega más colores según sea necesario
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '8px 8px 12px rgba(0, 0, 0, 1.5)',
        },
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#000000',
        },
        '.text-stroke-md': {
          '-webkit-text-stroke-width': '3px',
          '-webkit-text-stroke-color': '#000000',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke-width': '3px',
          '-webkit-text-stroke-color': '#000000',
        },
        // Puedes agregar más sombras personalizadas aquí
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}