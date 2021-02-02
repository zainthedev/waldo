import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	place-content: space-around;
	height: 10vh;
	width: 100%;
	font-size: calc((0.1em + 1vmin) + (0.1em + 1vmax));
	background: #22222c;
`;

export const Timer = styled.div`
	display: flex;
	align-items: center;
	font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
`;
