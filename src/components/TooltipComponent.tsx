import { TagTooltip } from '../styled-components/tooltipStyles'
import { useState, useEffect } from 'react'

export const TooltipComponent = () => {
    const [position, setPosition] = useState({x: 0, y: 0})

    function cursorHandler(e: any) {
        let left = e.offsetX;
        let top = e.offsetY;
        e.style.left = left + 'px';
        e.style.top = top + 'px';
    }

       useEffect(() => {
               addEventListeners();
               return () => removeEventListeners();
           }, []);
        
           const addEventListeners = () => {
               document.addEventListener("mousemove", onMouseMove);
           };
        
           const removeEventListeners = () => {
               document.removeEventListener("mousemove", onMouseMove);
           };

    const onMouseMove = (e: any) => {
               setPosition({x: e.offsetX, y: e.offsetY});
           }; 

    return (
        <TagTooltip style={{left: `${position.x}px`,
            top: `${position.y}px`}} />)
}