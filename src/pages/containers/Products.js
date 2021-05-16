import React from 'react';
import Product from '../components/ProductComponents/Product';
import shampoo from '../../assets/images/shampoo-figaro.jpg';
import cream from '../../assets/images/crema-figaro.png';

const Products = () => {
    return (
        <section id="products">
            <Product imgUrl= {shampoo} imgAlt="An image of Figaro shampoo">Shampoo</Product>
            <Product imgUrl= {cream} imgAlt="An image of Figaro creme">Créme</Product>
        </section>
    )
}

export default Products;
