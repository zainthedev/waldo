import { TagTooltip } from '../styled-components/tooltipStyles'

export type TooltipProps = {
    mousePosition: {
        x: number,
        y: number
    }
}

export const TooltipComponent = ({ mousePosition }: TooltipProps) => {
    return <TagTooltip style={{left: mousePosition.x, top: mousePosition.y}} />
}