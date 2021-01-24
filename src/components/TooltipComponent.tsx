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
            <button value='Jak' name='character'>Jak</button>
            <button value='Ratchet' name='character'>Ratchet</button>
            <button value='Yuna' name='character'>Yuna</button>
        </ChoiceBox>
    </Tooltip>)}