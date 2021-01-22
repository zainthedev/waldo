import { Tooltip, TargetingBox, ChoiceBox } from '../styled-components/tooltipStyles'

export type TooltipProps = {
    mousePosition: {
        x: number,
        y: number
    }
}

export const TooltipComponent = ({ mousePosition }: TooltipProps) => {
    return (
    <Tooltip style={{left: mousePosition.x, top: mousePosition.y}}>
        <TargetingBox />
        <ChoiceBox>
            <input type='radio' value='Jak' name='character' /> Jak
            <input type='radio' value='Ratchet' name='character' /> Ratchet
            <input type='radio' value='Jak' name='character' /> Yuna
        </ChoiceBox>
    </Tooltip>)}