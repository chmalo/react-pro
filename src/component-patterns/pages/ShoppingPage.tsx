import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import '../styles/custom-styles.css';
import {onChangeArg, ProductInCart, ProductProps} from "../interfaces/interfaces";
import {useState} from "react";

const product = {
    id: '1',
    img: './coffee-mug.png',
    title: 'Coffee mug - Card'
};

const product2 = {
    id: '2',
    img: './coffee-mug2.png',
    title: 'Coffee mug - Meme'
};

const products = [product, product2] as ProductProps[];

interface ProductStateCart {
    [key: string]: ProductInCart
}

const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState<ProductStateCart>({});

    const onProductCountChange = ({product, count}: onChangeArg) => {
        setShoppingCart(oldshoppingCart => {
            if(count === 0) {
                const {[product.id]: toDelete, ...rest} = oldshoppingCart;
                return rest
            }

            return {
                ...oldshoppingCart,
                [product.id]: {...product, count}
            }
        })
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                    products.map(product => (
                        <ProductCard key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            value={shoppingCart[product.id]?.count || 0}
                            onChange={onProductCountChange}>
                            <ProductCard.Image className="custom-image"/>
                            <ProductCard.Title className="text-bold"/>
                            <ProductCard.Buttons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }

                <ProductCard product={product} style={{backgroundColor: '#70D1F8'}}>
                    <ProductImage style={{borderRadius: '20px', width: 'calc(100% - 20px)', padding: '10px'}}/>
                    <ProductTitle style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}/>
                    <ProductButtons style={{display: 'flex', justifyContent: 'center'}}/>
                </ProductCard>
            </div>

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{width: '100px'}}
                            value={product.count}
                            onChange={onProductCountChange}>
                            <ProductCard.Image className="custom-image"/>
                            <ProductCard.Buttons className="custom-buttons"
                                style={{display: 'flex', justifyContent: 'center'}}/>
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default ShoppingPage;