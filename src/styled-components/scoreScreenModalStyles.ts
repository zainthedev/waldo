import styled from 'styled-components';

export const ScoreScreenWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	place-content: space-around;
	height: 100%;
	width: 100%;
	overflow: hidden;
`;

export const PlayerScoreDisplay = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	width: 80%;
	height: 40%;
`;

export const PlayerNameInput = styled.input`
	border: none;
	border-radius: 5px;
	font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	text-align: center;
	@media (max-width: 768px) {
		font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	} ;
`;

export const InputErrorText = styled.div`
	display: flex;
	text-align: center;
	color: #eb6438;
`;

export const NameSubmitButton = styled.div`
	display: flex;
	flex-direction: column;
	border: solid 1px #6365b0;
	padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 8px;
	padding-right: 8px;
	cursor: pointer;
	background: #22222c;
	border-radius: 5px;
	&:hover {
		transition: all 0.1s ease-in-out;
		background-color: #6365b0;
	}
	@media (max-width: 768px) {
		font-size: calc((0.1em + 1vmin) + (0.1em + 1vmax));
	} ;
`;

export const Scoreboard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	height: 50%;
	box-shadow: 0px 5px 8px 0px rgb(99 101 176);
	border-radius: 5px;
	padding: 15px;
	font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	overflow-y: auto;
	::-webkit-scrollbar {
		width: 0.2em;
	}
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}
	::-webkit-scrollbar-thumb {
		background-color: #eefbff;
		outline: 1px solid #6365b0;
	}
`;
export const Score = styled.div`
	display: flex;
	place-content: space-between;
	width: 100%;
	font-size: calc((0.2em + 0.5vmin) + (0.2em + 0.5vmax));
	border-bottom: solid 2px rgba(99, 101, 176, 1);
	padding-top: 8px;
	padding-bottom: 8px;
`;

export const PlayerScore = styled(Score)`
	text-shadow: 0px 0px 4px #ebe450;
`;
