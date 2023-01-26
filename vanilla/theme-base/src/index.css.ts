import { createTheme } from '@vanilla-extract/css';
import 'vanilla-reset';

export const [themeClass, theme] = createTheme({
	color: {
		primary: {
			50: '#f0fdfa',
			100: '#e3f1f7',
			200: '#ccfbf1',
			300: '#5eead4',
			400: '#2dd4bf',
			500: '#14b8a6',
			600: '#0d9488',
			700: '#0f766e',
			800: '#115e59',
			900: '#134e4a',
		},
		white: '#fff',
		black: '#000',
		transparent: 'transparent',
	},
});
