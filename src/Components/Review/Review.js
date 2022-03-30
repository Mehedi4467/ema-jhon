import React from 'react';
import { useCart } from '../../hooks/useCart';
import { useProduct } from '../../hooks/useProducts';
import Cart from '../Shop/Shop-Cart/Cart';
import ReviewItem from './ReviewItem/ReviewItem';
import './ReviewItem/ReviewItem.css';

const Review = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);

    const deleteHandeler = (product) => {
        const res = cart.filter(pd => pd.id !== product.id);
        setCart(res);
    }
    return (
        <div>
            <div className="order-body">
                <div className='item-main-body'>
                    {
                        cart.map(product => <ReviewItem key={product.id} deleteHandeler={deleteHandeler} product={product}></ReviewItem>)
                    }
                </div>
                <div className='shop-cart'>
                    <Cart cartProduct={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;