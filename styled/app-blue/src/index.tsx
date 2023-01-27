import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@styled/components';
import { GlobalStyle, theme } from '@styled/theme-blue';
import styled, { ThemeProvider } from 'styled-components';

const H1 = styled.h1`
	font-family: sans-serif;
	font-size: 1.8rem;
	font-weight: bold;
	color: ${(props) => props.theme.colors.primary[500]};
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<H1>Styled Components base theme</H1>
			<Button>button</Button>
		</ThemeProvider>
	</React.StrictMode>
);
