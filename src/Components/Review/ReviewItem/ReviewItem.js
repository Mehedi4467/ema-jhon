import React from 'react';
import { TrashIcon } from '@heroicons/react/solid';

const ReviewItem = ({ product, deleteHandeler }) => {
    const { name, img, shipping, id, price, quantity } = product;
    return (
        <div className='item-body'>
            <div className='img-body'>
                <img src={img} alt="" />
            </div>
            <div className='item-info-body'>
                <div className='item-info'>
                    <p className='product-name' title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>Price : <span> ${price}</span></p>
                    <p>Shipping : <span>{shipping}</span></p>
                    <p>Quantity: <span>{quantity}</span></p>
                </div>
                <div className='item-delete'>
                    <button onClick={() => deleteHandeler(product)}>Delete</button>

                </div>
            </div>
        </div>
    );
};

export default ReviewItem;