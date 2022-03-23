const addToCartLocal = (id) => {
    let shoppingCart = getShoppingCart();

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }


    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};


const getShoppingCart = () => {
    let shoppingCart = {};

    const localStore = localStorage.getItem('shopping-cart');
    if (localStore) {
        shoppingCart = JSON.parse(localStore);
    }

    return shoppingCart;
};

export { addToCartLocal, getShoppingCart };