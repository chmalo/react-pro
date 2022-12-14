import {useState} from "react";
import {onChangeArg, ProductInCart} from "../interfaces/interfaces";

interface ProductStateCart {
    [key: string]: ProductInCart
}
export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<ProductStateCart>({});

    const onProductCountChange = ({product, count}: onChangeArg) => {

        setShoppingCart(oldshoppingCart => {

            const productIncart:ProductInCart = oldshoppingCart[product.id] || {...product, count: 0};

            if(Math.max(productIncart.count + count, 0) > 0) {
                productIncart.count += count;

                return {
                    ...oldshoppingCart,
                    [product.id]: productIncart
                }
            }

            const {[product.id]: toDelete, ...rest} = oldshoppingCart;
            return rest;
        })
    }

    return {
        shoppingCart,

        onProductCountChange
    }
}