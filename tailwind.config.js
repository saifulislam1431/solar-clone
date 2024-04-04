/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0696BA',
        'natural': '#000000',
        'error': '#F14336',
        'success': '#28B446',
        'warning': '#FDD963',
        'base-200': '#FAFAFA',
        'base-100': '#FFFFFF',
      },
    },
  },
  plugins: [require("daisyui")],
};
