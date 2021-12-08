module.exports = {
  // purge: ["/src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  purge: {
    enabled: true,
    layers: ["components", "pages"],
    content: ["/src/**/*.{js,jsx,ts,tsx}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
