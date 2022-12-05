import {FC, ReactElement} from "react";

export interface ProductCardProps {
    children?: ReactElement | ReactElement[],
    className?: string
    product: ProductProps,
}

export interface ProductProps {
    id: string,
    img?: string
    title: string,
}

export interface ProductTitleProps {
    className?: string
    title?: string,
}

export interface ProductImageProps {
    className?: string
    img?: string,
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: ProductProps
}

export interface ProductCardHOCProps {
    ({children, product}: ProductCardProps): JSX.Element,
    Buttons: FC<{}>
    Image: FC<{img?: string}>,
    Title: FC<{title?: string}>,
}