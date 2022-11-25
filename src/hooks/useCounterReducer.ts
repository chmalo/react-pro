import {useReducer} from "react";
import {counterReducer, initialState} from "../reducers";
import {doIncreaseBy, doReset} from "../reducers/actions";

export const useCounterReducer = () => {
    const [counterState, dispatch] = useReducer(counterReducer, initialState);

    const handledClickReset = () => {
        dispatch(doReset())
    };

    const handledClick = (value: number) => {
        dispatch(doIncreaseBy(value))
    };

    return  {
        counterState,

        handledClickReset,
        handledClick
    }
}