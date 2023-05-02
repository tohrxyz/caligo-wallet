/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./*.tsx',
	],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-react-native-classnames'),
  ],
}

