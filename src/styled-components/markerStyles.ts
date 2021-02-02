import styled from 'styled-components';

export const Marker = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	transform: translate(-50%, -25%);
	z-index: 2;
	background: rgba(34, 34, 44, 0.8);
	border: solid 1px #6365b0;
	padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 8px;
	padding-right: 8px;
	border-radius: 5px;
	@media (max-width: 768px) {
		transform: translate(-50%, -15%);
		font-size: calc((0.1em + 1vmin) + (0.1em + 1vmax));
	} ;
`;
