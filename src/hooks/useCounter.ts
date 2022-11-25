import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {gsap} from "gsap";

interface CounterHookProps {
    maxCount: number;
}

export const useCounter = ({maxCount = 1}: CounterHookProps) => {
    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<any>(null);
    const tl = useRef(gsap.timeline());

    const handledClick = () => {
        setCounter(prev => Math.min(prev +1, maxCount));
    };

    useLayoutEffect(() => {
        if (!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out',})
            .to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out',})
            .paused();
    }, []);

    useEffect(() => {
        tl.current.play(0)
    }, [counter]);

    return {
        counter,
        elementToAnimate,

        handledClick
    }
};