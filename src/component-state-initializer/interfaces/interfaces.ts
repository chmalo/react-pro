import {CSSProperties, FC, ReactElement} from "react";

export interface ProductCardProps {
    // children?: ReactElement | ReactElement[] ,
    children: (args : ProductCardHandlers) => JSX.Element
    className?: string
    product: ProductProps,
    style?: CSSProperties,

    value?: number,
    onChange?: (args: onChangeArg) => void
    initialValue?: InitialValues
}

export interface InitialValues {
    count?: number,
    maxCount?: number
}

export interface useProductProps {
    product: ProductProps,
    onChange?: (args: onChangeArg) => void,
    value?: number,
    initialValue?: InitialValues
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
    maxCount?: number
    product: ProductProps,
    increaseBy: (value: number) => void,
}

export interface ProductCardHOCProps {
    ({children, product}: ProductCardProps): JSX.Element,
    Buttons: FC<ProductButtonsProps>
    Image: FC<ProductImageProps>,
    Title: FC<ProductTitleProps>,
}

export interface ProductCardHandlers {
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: ProductProps,

    increaseBy: (value: number) => void,
    reset: () => void,
}