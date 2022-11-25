import {FC, useState} from "react";
import {Props} from "../interfaces";

export const Counter: FC<Props> = ({initialValue = 1}) => {
    const [counter, setCounter] = useState(initialValue);

    const handledClick = () => {
        setCounter(prev => prev + 1);
    };

    return (
        <div>
            <h1>Counter {counter}</h1>

            <button onClick={handledClick}>
                +1
            </button>
        </div>
    );
};