module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	darkmode: 'class',
	theme: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin')
	],
};
