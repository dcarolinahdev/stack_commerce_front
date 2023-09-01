/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      extend: {
        colors: {
          t_main: "#FFFFFE",
          t_stroke: "#010101",
          t_highlight: "#7F5AF0",
          t_background: "#16161A",
          t_secondary: "#72757E",
          t_paragraph: "#94A1B2",
          t_btn_text: "#7F5AF0",
          t_tertiary: "#2CB67D",
        },
      }
  },
  variants: {},
  plugins: []
}
