import { useEffect, useState } from "react"
import { getShoppingCart } from "../utilities/addToCartLocal";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        for (const id in storedCart) {
            const storeProduct = products.find(product => product.id === id);
            if (storeProduct) {
                const quantity = storedCart[id];
                storeProduct.quantity = quantity;
                saveCart.push(storeProduct);

            }
        }
        setCart(saveCart);

    }, [products]);

    return [cart, setCart];
}

export { useCart };