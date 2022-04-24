import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/product`;
        fetch(url)
            .then(res => res.json())
            .then(products => setProducts(products));
    }, []);
    return [products, setProducts];
}


export { useProduct };