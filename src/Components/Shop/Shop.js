import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useProduct } from '../../hooks/useProducts';
import { addToCartLocal, getShoppingCart } from '../../utilities/addToCartLocal';
import Product from './Product/Product';
import Cart from './Shop-Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);


    const cartHandler = (product) => {
        let newCart = [];
        const exists = cart.find(cartProduct => cartProduct._d === product._d);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rest = cart.filter(cartProduct => cartProduct._d !== product._d);
            product.quantity += 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToCartLocal(product._d);

    };



    return (
        <div className='shop-container'>
            <div className='products'>
                {
                    products.map(product => <Product product={product} key={product._id} handleClick={cartHandler}></Product>)
                }

            </div>
            <div className='shop-cart'>
                <Cart cartProduct={cart}>
                    <Link to='/review'>Review Order</Link>
                </Cart>

            </div>
        </div >
    );
};

export default Shop;