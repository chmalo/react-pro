import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee mug - Card',
    img: './coffee-mug.png'
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr/>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title className="text-bold"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={product} className="bg-dark text-white">
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={product} style={{backgroundColor: '#70D1F8'}}>
                    <ProductImage style={{borderRadius: '20px', width: 'calc(100% - 20px)', padding: '10px'}}/>
                    <ProductTitle style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}/>
                    <ProductButtons style={{display: 'flex', justifyContent: 'center'}}/>
                </ProductCard>
            </div>
        </div>
    );
};