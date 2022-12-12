import styles from '../styles/styles.module.css';
import {useProduct} from "../hooks/useProduct";
import {ProductCardProps, ProductContextProps} from "../interfaces/interfaces";
import {createContext} from "react";

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product, className, style, value, onChange}: ProductCardProps ): JSX.Element => {
    const {counter, increaseBy} = useProduct({product, onChange, value});

    return (
        <Provider value={{counter, increaseBy, product}}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                { children }
            </div>
        </Provider>
    );
};