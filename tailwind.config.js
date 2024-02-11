/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'node_modules/flowbite-react/lib/esm/**/*.js',
	],
	darkMode: 'class',
	plugins: [
		require('tailwindcss-safe-area'),
		require('flowbite/plugin'),
	],
}
