import React from 'react';
import './Cart.css';
const Cart = () => {
    return (
        <div>
            <h3 className='order-title'>Order Summery</h3>
            <div className='cart-calculator'>
                <p>Selected Items: 6</p>
                <p>Total Price: $1140</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>


                <h3>Grand Total: $1559</h3>
            </div>
            <div>
                <button className='cart-btn'>
                    <p>Clear Cart</p>

                </button><br></br>
                <button className='cart-btn cart-review'>
                    <p>Review Order</p>
                </button>
            </div>
        </div >
    );
};

export default Cart;