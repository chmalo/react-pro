import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import {useShoppingCart} from "../hooks/useShoppingCart";
import {products} from "../data/products";
import '../styles/custom-styles.css';

const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShoppingCart()

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

                <ProductCard product={products[0]} style={{backgroundColor: '#70D1F8'}}>
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