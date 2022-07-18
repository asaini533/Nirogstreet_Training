/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const colors = require("tailwindcss/colors");
module.exports = {
	purge: [
		'./pages/*.js',
		'./pages/**/*.js',
		'./atoms/*.js',
		'./atoms/**/*.js',
		'./components/**/*.js',
		'./components/*.js',
	],
	options: {
		whitelist: ['.grid', '.grid-cols-3', '.gap-x-5']
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			...colors,
			'primary': {
				400: '#3655F2',
				100: '#EB595F'
			},
			'grey': {
				400: '#676777',
			},
			'offWhite':{
				100:'#F4F4F5',
			},
			"neutral":{
				5:"#F2F2F2",
				10: '#E6E6E6'
			}
			
		},

		extend: {
			inset: (theme) => ({
				'1/5': '20%',
			}),
			padding: (theme) => ({
				4.5: '18rem',
				'52px': '3.25rem',
			}),
			borderRadius: (theme) => ({
				'10px': '0.625rem',
			}),
			borderColor: () => ({
				'dark-blue': '#252C86',
				'offGrey':'#D4D4D8',
				'activeoffGrey':'#E9E9EB',
			}),
			backgroundColor: (theme) => ({
				...theme('colors'),
				'dark-blue': '#252C86',
				peach: '#FFEBEB',
				offBlack: "#26273D",
				offGrey: "#E9E9EB",
				'orange-50': "#E6492D",
				'grey': {
					400: '#92939E',
				}
			}),
			textColor: (theme) => ({
				offBlackColor: '#26273D',
				notes: '#717171',
				'error': '#A20B00',
				'iron-gray': '#D4D4D8',
				'textgrey': '#676777',
				'textlightBlack': '#92939E',

			}),
			fontWeight: (theme) => ({
				normal: '400',
			}),
			fontSize: (theme) => ({
				'2.5xl': '1.75rem',
				'xs-625': '0.625rem',
				'1.5':'0.375rem',

			}),
			margin: (theme) => ({
				1.2: '0.313rem',
			}),
			maxWidth:()=>({
				211.5: '846px'
			}),
			height: (theme) => ({
				85: '22.5rem',
				"1px": '1px',
			}),
			fontFamily: (theme) => ({
				gilroy: ["Gilroy","sans-serif"],
				sfpro: ["SFprodisplay","sans-serif"]
			}),
		},
		boxShadow: {
			'md-5': '0px 2px 8px rgba(38, 39, 61, 0.16)',
			'md-6': '0px 0px 2px rgba(0, 0, 0, 0.2)'
		},
	},
	variants: {
		extend: {
			backgroundColor: ['checked'],
			borderColor: ['checked'],
		}
	},
	plugins: [
		require('tailwindcss-rtl')
	]
};
