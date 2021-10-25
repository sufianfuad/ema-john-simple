import { useEffect, useState } from "react"

const useProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    // return necessary things // dorkari jinish return korbo
    // ek ba er odhik return korbo tai akta array[] er moddhhe raksi
    return [products, setProducts];
}

export default useProducts;