module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			// fira: ['Fira Sans', 'cursive'],
			fira: ['sans-serif', 'helvetica'],
			bebas: ['Bebas Neue', 'sans-serif'],
		},
		extend: {
			colors: {
				black: '#100F0F',
				beige: '#E2DCC8',
				night: '#F1F1F1',
				army: '#0F3D3E',
			},
		},
	},
	plugins: [],
};
