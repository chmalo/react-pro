import {FC, useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";
import {ProductTitleProps} from "../interfaces/interfaces";

export const ProductTitle: FC<ProductTitleProps> = ({title, className, style}): JSX.Element => {
    const {product} = useContext(ProductContext);

    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>
            {title ? title : product.title}
        </span>
    );
}