import {FC} from "react";
import {CounterProps} from "../interfaces";
import {useCounter} from "../hooks";

export const CounterHook: FC<CounterProps> = () => {

    const {
        counter,
        elementToAnimate,
        handledClick
    } = useCounter({maxCount: 10});

    return (
        <div>
            <h1>CounterHook: </h1>
            <h2 ref={elementToAnimate}>{counter}</h2>

            <button onClick={handledClick}>
                +1
            </button>
        </div>
    );
};