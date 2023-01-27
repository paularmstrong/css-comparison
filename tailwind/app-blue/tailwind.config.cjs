const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('@tailwind/theme-blue')],
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx}',
		path.join(path.dirname(require.resolve('@tailwind/components')), '**/*.tsx'),
	],
	corePlugins: {
		preflight: false,
	},
};
