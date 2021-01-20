import { TagTooltip } from '../styled-components/tooltipStyles'
import { TooltipProps } from '../types'

export const TooltipComponent = ({ mousePosition }: TooltipProps) => {
    return <TagTooltip style={{left: mousePosition.x, top: mousePosition.y}} />
}