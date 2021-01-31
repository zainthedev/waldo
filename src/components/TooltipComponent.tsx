import { Tooltip, TargetingBox, ChoiceBox, ChoiceButton } from '../styled-components/tooltipStyles';

export type TooltipProps = {
    mousePosition: {
        x: number,
        y: number
    },
    handleChoice: (e: React.MouseEvent) => void,
    playerChoice: { choiceMade: boolean, choice: string }
    remainingCharacters: string[];
};

export const TooltipComponent = ({ mousePosition, handleChoice, remainingCharacters }: TooltipProps) => {
    return (
        <Tooltip style={{ left: mousePosition.x, top: mousePosition.y }}>
            <TargetingBox />
            <ChoiceBox>
                {remainingCharacters.map((character) => {
                    return <ChoiceButton onClick={handleChoice} >{character}</ChoiceButton>
                })}
            </ChoiceBox>
        </Tooltip>
    )
};