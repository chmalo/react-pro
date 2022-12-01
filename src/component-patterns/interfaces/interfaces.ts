import {FC, ReactElement} from "react";

export interface ProductCardProps {
    product: ProductProps,
    children?: ReactElement | ReactElement[]
}

export interface ProductProps {
    id: string,
    title: string,
    img?: string
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: ProductProps
}

export interface ProductCardHOCProps {
    ({children, product}: ProductCardProps): JSX.Element
    Title: FC<{title?: string}>,
    Image: FC<{img?: string}>,
    Buttons: FC<{}>
}