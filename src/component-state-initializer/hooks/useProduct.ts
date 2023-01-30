import {useEffect, useRef, useState} from "react";
import {useProductProps} from "../interfaces/interfaces";

export const useProduct = ({product, onChange, value = 0, initialValue}: useProductProps) => {
    const [counter, setCounter] = useState<number>(initialValue?.count || value);
    const isMounted = useRef(false);

    console.log(initialValue?.count, isMounted.current, value, !isMounted.current, counter);

    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0);
        if (initialValue?.maxCount) {
            newValue = Math.min(newValue, initialValue?.maxCount)
        }

        setCounter(newValue)
        onChange && onChange({count: newValue, product});
    }

    const reset = () => {
        setCounter(initialValue?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) {
            return;
        }

        setCounter(value)
    }, [value]);

    useEffect(() => {
        isMounted.current = true
    }, []);

    return {
        counter,
        maxCount: initialValue?.maxCount,
        isMaxCountReached : !!initialValue?.count && initialValue.maxCount === counter,

        increaseBy,
        reset
    }
}