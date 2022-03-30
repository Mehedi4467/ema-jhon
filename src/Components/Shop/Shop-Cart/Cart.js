
import React from 'react';
import './Cart.css';
import { TrashIcon } from '@heroicons/react/solid'
const Cart = (props) => {
    const { cartProduct } = props;

    const totalPrice = cartProduct.reduce((sum, current) => sum + current.price * current.quantity, 0);
    const shipping = cartProduct.reduce((sum, current) => sum + current.shipping, 0);
    const quantity = cartProduct.reduce((sum, current) => sum + current.quantity, 0);
    const tax = (totalPrice * .1).toFixed(2);
    const grandTotal = totalPrice + shipping + +tax;
    return (
        <div>
            <h3 className='order-title'>Order Summery</h3>
            <div className='cart-calculator'>
                <p>Selected Items: {quantity} </p>
                <p>Total Price: $ {totalPrice}</p>
                <p>Shipping Charge: ${shipping}</p>
                <p>Tax: $ {tax}</p>


                <h4>Grand Total: ${grandTotal}</h4>
            </div>
            <div>
                <button className='cart-btn'>
                    <div className='align-icon'>
                        <p>Clear Cart</p>
                        <TrashIcon className='trashIcon'></TrashIcon>
                    </div>

                </button><br></br>
                <button className='cart-btn cart-review'>
                    <p>Review Order</p>
                </button>
            </div>
        </div >
    );
};

export default Cart;