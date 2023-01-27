import styled from 'styled-components';

export const Button = styled.button`
	border-radius: 0.4rem;
	background-color: ${(props) => props.theme.colors.primary[800]};
	color: ${(props) => props.theme.colors.white};
	font-family: sans-serif;
`;
