import {FC, useState} from "react";
import {CounterByState, Props} from "../interfaces";

export const CounterBy: FC<Props> = ({initialValue = 5}) => {
    const [{counter, clicks}, setCounter] = useState<CounterByState>({counter: initialValue, clicks: 0});

    const handledClick = (val: number) => {
        setCounter(({counter, clicks}) => ({
            counter: counter + val,
            clicks: clicks + 1
        }));
    };

    return (
        <div>
            <h1>CounterBy {counter}</h1>
            <h1>Clicks {clicks}</h1>

            <button onClick={() => handledClick(1)}>+1</button>
            <button onClick={() => handledClick(5)}>+5</button>
        </div>
    );
};