import {CSSProperties, FC, ReactElement} from "react";

export interface ProductCardProps {
    children?: ReactElement | ReactElement[],
    className?: string
    product: ProductProps,
    style?: CSSProperties,
    onChange?: (args: onChangeArg) => void
}

export interface useProductProps {
    product: ProductProps,
    onChange?: (args: onChangeArg) => void
}

export interface ProductProps {
    id: string,
    img?: string
    title: string,
}

export interface ProductInCart extends ProductProps {
    count: number
}

export interface onChangeArg {
    product: ProductProps,
    count: number
}

export interface ProductTitleProps {
    className?: string,
    style?: CSSProperties,
    title?: string,
}

export interface ProductImageProps {
    className?: string,
    img?: string,
    style?: CSSProperties
}

export interface ProductButtonsProps {
    className?: string,
    style?: CSSProperties
}

export interface ProductContextProps {
    counter: number,
    product: ProductProps,
    increaseBy: (value: number) => void,
}

export interface ProductCardHOCProps {
    ({children, product}: ProductCardProps): JSX.Element,
    Buttons: FC<ProductButtonsProps>
    Image: FC<ProductImageProps>,
    Title: FC<ProductTitleProps>,
}