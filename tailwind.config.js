/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3880ff',
        secondary: '#3dc2ff',
        tertiary: '#5260ff',
        success: '#2dd36f',
        warning: '#ffc409',
        danger: '#eb445a',
        light: '#f4f5f8',
        medium: '#92949c',
        dark: '#222428',
      },
    },
  },
  plugins: [],
}

