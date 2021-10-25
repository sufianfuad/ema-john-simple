import React from 'react';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem'
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';


const OrderReview = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    //uawState jkane eventHandle shekane
    const handleRemove = key => {
        // console.log(key)
        // cart er moddhe product gula sorate filter
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () => {
        //Ui tekhe remove kore
        // setCart([]);
        //local storage tekhe remove kore
        // clearTheCart()
        history.push('/shipping');
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button
                        onClick={handleProceedToShipping}
                        className="cart-btn">Proceed to Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;

/* <h2>{products.length}</h2>
            <h3>{cart.length}</h3>
            <h2>Order Review</h2>
            <Cart cart={cart}></Cart> */