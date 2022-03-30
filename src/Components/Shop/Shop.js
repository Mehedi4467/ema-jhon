import React, { useEffect, useState } from 'react';
import { useProduct } from '../../hooks/useProducts';
import { addToCartLocal, getShoppingCart } from '../../utilities/addToCartLocal';
import Product from './Product/Product';
import Cart from './Shop-Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useState([]);


    const cartHandler = (product) => {
        let newCart = [];
        const exists = cart.find(cartProduct => cartProduct.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rest = cart.filter(cartProduct => cartProduct.id !== product.id);
            product.quantity += 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToCartLocal(product.id);

    };

    useEffect(() => {
        const storeCart = getShoppingCart();
        const saveCart = [];
        for (const id in storeCart) {
            const storeProduct = products.find(product => product.id === id);
            if (storeProduct) {
                const quantity = storeCart[id];
                storeProduct.quantity = quantity;
                saveCart.push(storeProduct);

            }
        }
        setCart(saveCart);
    }, [products]);

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