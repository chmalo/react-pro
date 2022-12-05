import {FC, useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";
import {ProductTitleProps} from "../interfaces/interfaces";

export const ProductTitle: FC<ProductTitleProps> = ({title, className}): JSX.Element => {
    const {product} = useContext(ProductContext);

    return (
        <span className={`${styles.productDescription} ${className}`}>
            {title ? title : product.title}
        </span>
    );
}