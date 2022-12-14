import {ProductCardHOCProps} from "../interfaces/interfaces";
import {ProductCard as ProductCardHOC} from "./ProductCard"
import {ProductTitle} from "./ProductTitle";
import {ProductButtons} from "./ProductButtons";
import {ProductImage} from "./ProductImage";

export * from "./ProductTitle"
export * from "./ProductButtons"
export * from "./ProductImage"

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;