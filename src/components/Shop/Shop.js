import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // aighula products k UI te render korar jonno
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
                // console.log('product received')
            })
    }, []);


    useEffect(() => {
        // console.log('L S call')
        if (products.length) {
            const saveCart = getStoredCart();
            const storeCart = []
            for (const key in saveCart) {

                // console.log(key, saveCart[key]);
                const addedProduct = products.find(product => product.key === key)
                // console.log(key, addedProduct);
                if (addedProduct) {
                    //key er quantity
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct)
                    storeCart.push(addedProduct)
                }

            }
            setCart(storeCart)
        }
    }, [products]);

    const handleAddToCart = product => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = []
        if (exists) {
            // oi products chara baki gula ashbe filter kore
            const remaining = cart.filter(pd => pd.key !== product.key);
            // oi filter kore product k ania 1 kore jok korsi
            exists.quantity = exists.quantity + 1;
            newCart = [...remaining, product];

        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        console.log(newCart)
        setCart(newCart);
        //Save to local storage (for now)
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts)
        console.log(matchedProducts.length);
    }

    return (
        <>
            <div className="search-container">
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {/* <h3>Products: {products.length}</h3> */}
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}

                        >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="cart-btn">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;