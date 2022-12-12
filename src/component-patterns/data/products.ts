import {ProductProps} from "../interfaces/interfaces";

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

export const products = [product, product2] as ProductProps[];