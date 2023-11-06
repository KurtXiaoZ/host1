import { useEffect, useState } from "react";

export const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth || 0);
    const [height, setHeight] = useState(window.innerHeight || 0);

    const windowResizeHandler = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', windowResizeHandler, false);
        return () => window.removeEventListener('resize', windowResizeHandler, false);
    }, []);

    return {
        width,
        height,
    };
};