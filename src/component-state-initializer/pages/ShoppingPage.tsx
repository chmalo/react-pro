import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import {products} from "../data/products";
import '../styles/custom-styles.css';

const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>

            <ProductCard product={products[0]} style={{backgroundColor: '#70D1F8'}} initialValue={{ count: 5, maxCount: 10}}>
                <ProductImage style={{borderRadius: '20px', width: 'calc(100% - 20px)', padding: '10px'}}/>
                <ProductTitle style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}/>
                <ProductButtons style={{display: 'flex', justifyContent: 'center'}}/>
            </ProductCard>
        </div>
    );
};

export default ShoppingPage;