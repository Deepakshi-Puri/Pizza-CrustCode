import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const SingleProduct = () => {

    const [product, setProduct] = useState({});
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch('https://star-spark-pasta.glitch.me/api/products/' + params._id)
            .then(response => response.json())
                .then(product => setProduct(product))
    }, [params._id]);

    return (
        <>
            <button className="text-2xl m-16 font-bold border-2 border-stone-500 p-2 hover:bg-stone-500 hover:text-white"
                onClick={() => { history.goBack() }}>Go Back</button>
            <div className="container mx-auto mt-12 flex justify-center">
                <div className="flex">
                    <img src={product.image} alt="pizza" />
                    <div className="ml-16">
                        <h1 className="text-xl font-bold">{product.name}</h1>
                        <div className="text-md">{product.size}</div>
                        <div className="font-bold mt-2">₹ {product.price}</div>
                        <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;