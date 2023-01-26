import { style } from '@vanilla-extract/css';
import { theme } from '@cssoptions/vanilla-theme-blue';

export const title = style({
	fontWeight: 'bold',
	fontSize: '2.4rem',
	fontFamily: 'sans-serif',
	color: theme.color.primary[800],
});
