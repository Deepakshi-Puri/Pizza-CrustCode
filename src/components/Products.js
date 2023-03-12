import Product from './Product';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../CartContext';

const Products = () => {
    // const {name} = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://star-spark-pasta.glitch.me/api/products').then(response => { return response.json()})
            .then(products => setProducts(products));
    },[]);

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8 mx-12">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-24 mx-16">
                {
                    products.map(product => <Product key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}

export default Products;