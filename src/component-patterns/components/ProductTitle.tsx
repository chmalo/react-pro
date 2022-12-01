import {FC, useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export const ProductTitle: FC<{title?: string}> = ({title}): JSX.Element => {
    const {product} = useContext(ProductContext);

    return (
        <span className={styles.productDescription}>
            {title ? title : product.title}
        </span>
    );
}