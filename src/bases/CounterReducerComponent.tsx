import {FC} from "react";
import {CounterProps} from "../interfaces";
import {useCounterReducer} from "../hooks";

export const CounterReducerComponent: FC<CounterProps> = () => {
    const {counterState, handledClick, handledClickReset} = useCounterReducer();

    return (
        <div>
            <h1>counterReducer</h1>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>

            <button onClick={() =>handledClick(1)}>
                +1
            </button>
            <button onClick={() =>handledClick(5)}>
                +5
            </button>
            <button onClick={() =>handledClick(10)}>
                +10
            </button>

            <button onClick={handledClickReset}>
                Reset
            </button>
        </div>
    );
};