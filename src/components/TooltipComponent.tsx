import { Tooltip, TargetingBox, ChoiceBox,ChoiceButton } from '../styled-components/tooltipStyles'

export type TooltipProps = {
    mousePosition: {
        x: number,
        y: number
    },
    handleChoice: (e: React.MouseEvent) => object,
}

export const TooltipComponent = ({ mousePosition, handleChoice }: TooltipProps) => {
    return (
    <Tooltip style={{left: mousePosition.x, top: mousePosition.y}}>
        <TargetingBox />
        <ChoiceBox>
            <ChoiceButton onClick={handleChoice} value='Jak' name='character'>Jak</ChoiceButton>
            <ChoiceButton onClick={handleChoice} value='Ratchet' name='character'>Ratchet</ChoiceButton>
            <ChoiceButton onClick={handleChoice} value='Yuna' name='character'>Yuna</ChoiceButton>
        </ChoiceBox>
    </Tooltip>)}