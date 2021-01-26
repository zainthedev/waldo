import { Tooltip, TargetingBox, ChoiceBox, ChoiceButton, ChoiceFeedback } from '../styled-components/tooltipStyles';

export type TooltipProps = {
    mousePosition: {
        x: number,
        y: number
    },
    handleChoice: (e: React.MouseEvent) => object,
    playerChoice: { choiceMade: boolean, choice: string }
};

export const TooltipComponent = ({ mousePosition, handleChoice, playerChoice }: TooltipProps) => {
    return (
        <Tooltip style={{ left: mousePosition.x, top: mousePosition.y }}>
            <TargetingBox />
            <ChoiceBox>
                <ChoiceButton onClick={handleChoice} >Jak</ChoiceButton>
                <ChoiceButton onClick={handleChoice} >Ratchet</ChoiceButton>
                <ChoiceButton onClick={handleChoice} >Yuna</ChoiceButton>
            </ChoiceBox>
            {playerChoice.choiceMade && (
                <ChoiceFeedback>
                    That's not {playerChoice.choice}. Try again!
                </ChoiceFeedback>
            )}
        </Tooltip>
    )
};