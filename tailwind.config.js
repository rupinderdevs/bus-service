/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				black: '#222222',
				primary: {
					DEFAULT: '#05579B',
					90: '#E1F1FF',
					80: '#F5F9FF'
				},
				secondary: {
					DEFAULT: '#5688D2',
					90: '#767587'
				},
				orange: {
					DEFAULT: '#D9A21B'
				},
				gray: {
					DEFAULT: '#5345454',
					90: '#404756',
					light: '#A4ABBD'
				}
			},
			fontSize: {
				xxs: '0.75rem /*12px*/', //12px
				xs: '0.875rem /*14px*/', //14px
				s: '1rem /*16px*/', //16px
				m: '1.125rem /*18px*/', //18px
				l: '1.25rem /*20px*/', //20px
				xl: '1.375rem /*22px*/', //22px
				xxl: '1.5rem /*24px*/', //24px
				'2l': '1.625rem /*26px*/', //26px
				'3l': '1.75rem /*28px*/', //28px
				'4l': '1.875rem /*30px*/', //30px
				'5l': '2rem /*32px*/', //32px
				'6l': '2.125rem /*34px*/', //34px
				'7l': '2.25rem /*36px*/', //36px
				'8l': '2.5rem /*40px*/', //40px
				'9l': '2.625rem /*42px*/', //42px
				'10l': '2.875rem /*46px*/', //46px
				'11l': '3rem /*48px*/' //48px
			},
			boxShadow: {
				custom: '0px 3px 6px #AEAEAE29'
			}
		}
	},
	plugins: []
};
