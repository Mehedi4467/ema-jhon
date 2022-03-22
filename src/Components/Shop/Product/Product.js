import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props.product);
    const { img, name, price, ratings, seller, quantity } = props.product;
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price : ${price}</p>

                <p className='product-seller'><small>Manufacturer : {seller} </small></p>
                <p className='product-rating'><small>Rating: {ratings} Star </small></p>
            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;