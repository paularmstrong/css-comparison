const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@cssoptions/tailwind-theme-blue")],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    path.join(
      path.dirname(require.resolve("@cssoptions/tailwind-components")),
      "**/*.tsx"
    ),
  ],
};
