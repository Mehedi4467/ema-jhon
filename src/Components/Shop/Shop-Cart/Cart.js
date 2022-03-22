import React from 'react';
import { productTotalPrice, tax, shippingCharge, grandTotal } from '../../../utilities/cartCalculation';
import './Cart.css';
const Cart = (props) => {
    const totalItm = props.cartProduct.length;
    const totalPrice = productTotalPrice(props.cartProduct);
    const totalTax = tax(totalPrice);
    const shipping = shippingCharge(totalItm);
    return (
        <div>
            <h3 className='order-title'>Order Summery</h3>
            <div className='cart-calculator'>
                <p>Selected Items: {totalItm}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Shipping Charge: ${shipping}</p>
                <p>Tax: $ {totalTax}</p>


                <h4>Grand Total: ${grandTotal(totalPrice, totalTax, shipping)}</h4>
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