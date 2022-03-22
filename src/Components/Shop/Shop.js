import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import Cart from './Shop-Cart/Cart';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(products => setProducts(products));
    }, []);

    const cartHandler = (product) => {

        let newCart = [...cart, product];
        setCart(newCart);

    };

    return (
        <div className='shop-container'>
            <div className='products'>
                {
                    products.map(product => <Product product={product} key={product.id} handleClick={cartHandler}></Product>)
                }

            </div>
            <div className='shop-cart'>
                <Cart cartProduct={cart} key={cart.id}></Cart>

            </div>
        </div >
    );
};

export default Shop;