import {useState} from "react";
import {useProductProps} from "../interfaces/interfaces";



export const useProduct = ({product, onChange}: useProductProps) => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);

        setCounter(newValue)

        onChange && onChange({count: newValue, product});
    }

    return {
        counter,

        increaseBy
    }
}