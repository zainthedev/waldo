export type TooltipProps = {
    mousePosition: {
        x: number
        y: number
    }
}

export type MainImageContainerProps = {
    handleMousePosition: (e: React.MouseEvent) => void
    pageX?: number
    pageY?: number
}