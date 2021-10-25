import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props;
    //console kore deklam
    console.log(props.children);

    // const totalReduce = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReduce, 0);
    //======================================

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 20 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <p><strong>Items Order: {totalQuantity}</strong></p>
            <br />
            <h5 className="total">Total before tax: ${total.toFixed(2)}</h5>
            <p>Shipping Charge ${shipping}</p>
            <p>Estimated Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Order Total: ${grandTotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;
