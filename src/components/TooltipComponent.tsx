import { Tooltip, TargetingBox, ChoiceBox, ChoiceButton } from '../styled-components/tooltipStyles';

export type TooltipProps = {
    mousePosition: {
        x: number,
        y: number
    },
    handleChoice: (e: React.MouseEvent) => void,
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
        </Tooltip>
    )
};