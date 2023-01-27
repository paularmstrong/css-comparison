import { theme } from '@vanilla/theme-base';
import { style } from '@vanilla-extract/css';

export const buttonClassname = style({
	borderRadius: '0.4rem',
	backgroundColor: theme.color.primary[800],
	color: theme.color.white,
});
