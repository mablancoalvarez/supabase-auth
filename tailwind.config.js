/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
    './index.html', // Incluye el archivo HTML principal
    './src/**/*.{js,ts,jsx,tsx}', // Incluye todos los archivos en `src` con extensiones .js, .ts, .jsx y .tsx
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
