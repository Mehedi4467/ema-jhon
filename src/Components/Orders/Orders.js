import React from 'react';
import { useProduct } from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProduct();
    return (
        <div>
            <h1>Hello this is orders: {products.length}</h1>
        </div>
    );
};

export default Orders;