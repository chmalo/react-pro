import styles from '../styles/styles.module.css';
import {useProduct} from "../hooks/useProduct";
import {ProductCardProps, ProductContextProps} from "../interfaces/interfaces";
import {createContext} from "react";

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard= ({children, product}: ProductCardProps ): JSX.Element => {
    const {counter, increaseBy} = useProduct();

    return (
        <Provider value={{counter, increaseBy, product}}>
            <div className={styles.productCard}>
                { children }
            </div>
        </Provider>
    );
};