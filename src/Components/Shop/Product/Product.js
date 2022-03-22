import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ handleClick, product }) => {

    const { img, name, price, ratings, seller } = product;


    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price : ${price}</p>

                <p className='product-seller'><small>Manufacturer : {seller} </small></p>
                <p className='product-rating'><small>Rating: {ratings} Star </small></p>
            </div>
            <button onClick={() => handleClick(product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;