import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
// import { productTotalPrice, tax, shippingCharge, grandTotal } from '../../../utilities/cartCalculation';
import './Cart.css';
const Cart = (props) => {
    const { cartProduct } = props;
    const items = cartProduct.length;

    const totalPrice = cartProduct.reduce((sum, current) => sum + current.price, 0);
    const shipping = cartProduct.reduce((sum, current) => sum + current.shipping, 0);
    const tax = (totalPrice * .1).toFixed(2);
    const grandTotal = totalPrice + shipping + +tax;
    return (
        <div>
            <h3 className='order-title'>Order Summery</h3>
            <div className='cart-calculator'>
                <p>Selected Items: {items} </p>
                <p>Total Price: $ {totalPrice}</p>
                <p>Shipping Charge: ${shipping}</p>
                <p>Tax: $ {tax}</p>


                <h4>Grand Total: ${grandTotal}</h4>
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