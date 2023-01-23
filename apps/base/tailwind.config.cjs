const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("theme-base")],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    path.join(path.dirname(require.resolve("components")), "**/*.tsx"),
  ],
};
