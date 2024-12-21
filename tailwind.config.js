/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,png}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
};
