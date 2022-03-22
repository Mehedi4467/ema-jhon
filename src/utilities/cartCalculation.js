const productTotalPrice = (items) => {
    let total = 0;
    for (const item of items) {
        total += +item.price;
    }
    return total;
}

const tax = (totalPrice) => {
    const totalTax = totalPrice * .01;
    return totalTax.toFixed(2);
}

const shippingCharge = (totalItem) => {
    const totalShippingCharge = totalItem * 5;
    return totalShippingCharge;
}

const grandTotal = (total, tax, charge) => {
    const subTotal = +total + +tax + +charge;
    return parseFloat(subTotal).toFixed(2);
}
export { productTotalPrice, tax, shippingCharge, grandTotal };