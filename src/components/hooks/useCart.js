import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb";

const useCart = products => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        //local storage tekhe data newa
        if (products.length) {
            const saveCart = getStoredCart();
            const storedCart = [];

            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key)
                //local tekhe product jodi pawajay
                if (addedProduct) {
                    //set quantity
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            // set kore disi storedCart k
            setCart(storedCart);
        }
    }, [products]);

    return [cart, setCart]
}

export default useCart;