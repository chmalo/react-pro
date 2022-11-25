import {FC, useEffect, useRef, useState} from "react";
import {gsap} from 'gsap';

interface CounterProps {
}

const MAXIMUM_COUNT = 10;

export const CounterEffect: FC<CounterProps> = () => {
    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handledClick = () => {
        setCounter(prev => Math.min(prev +1, MAXIMUM_COUNT));
    };

    useEffect(() => {
        if (counter < MAXIMUM_COUNT) return;

        console.log('valor maximo');

        const tl = gsap.timeline();
        tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out',})
            .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out',});
    }, [counter]);

    return (
        <div>
            <h1>CounterEffect: </h1>
            <h2 ref={counterElement}>{counter}</h2>

            <button onClick={handledClick}>
                +1
            </button>
        </div>
    );
};