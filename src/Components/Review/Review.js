import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useProduct } from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Shop/Shop-Cart/Cart';
import ReviewItem from './ReviewItem/ReviewItem';
import './ReviewItem/ReviewItem.css';

const Review = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);

    const deleteHandeler = (product) => {
        const res = cart.filter(pd => pd._d !== product._d);
        setCart(res);
        removeFromDb(product._d);
    }
    return (
        <div>
            <div className="order-body">
                <div className='item-main-body'>
                    {
                        cart.map(product => <ReviewItem key={product._d} deleteHandeler={deleteHandeler} product={product}></ReviewItem>)
                    }
                </div>
                <div className='shop-cart'>
                    <Cart cartProduct={cart}>
                        <Link to='/order'>Order</Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;