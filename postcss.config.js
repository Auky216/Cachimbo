export default {
  plugins: {
    "postcss-nesting": {}, // Añade esta línea
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
  },
};
