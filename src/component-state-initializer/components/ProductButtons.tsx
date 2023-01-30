import {FC, useCallback, useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";
import {ProductButtonsProps} from "../interfaces/interfaces";

export const ProductButtons: FC<ProductButtonsProps> = ({className, style}): JSX.Element => {

    const {counter, increaseBy, maxCount} = useContext(ProductContext);
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount]
    );

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus}  onClick={() => increaseBy(-1)}>-</button>

            <div className={styles.countLabel}>
                {counter}
            </div>

            <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}>+</button>
        </div>
    );
}