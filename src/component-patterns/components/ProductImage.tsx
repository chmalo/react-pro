import {FC, useContext} from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export const ProductImage: FC<{img?: string}> = ({img = ''}): JSX.Element => {
    const {product} = useContext(ProductContext);
    let imgToShow: string;

    if (img){
        imgToShow = img
    } else if (product.img){
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img className={styles.productImg} src={ imgToShow } alt="Product" />
    );
}