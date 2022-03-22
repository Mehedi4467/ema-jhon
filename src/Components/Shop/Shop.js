import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import Cart from './Shop-Cart/Cart';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(products => setProducts(products));
    }, []);
    return (
        <div className='shop-container'>
            <div className='products'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }

            </div>
            <div className='shop-cart'>
                <Cart></Cart>
            </div>
        </div >
    );
};

export default Shop;