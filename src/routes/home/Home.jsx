import { useDispatch } from "react-redux"
import { addToCart } from "../../store/cartSlice";
import axios from '../../api/axios'
import { useEffect, useState } from "react";

const Home = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/products')
            setProducts(data.products)
        }
        fetchProducts()
    }, [])

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, quantity: 1 }))
    }

    return (
        <div>
            <div className="w-full max-w-[1366px] h-full mx-auto px-4 my-5">
                <div className="grid grid-cols-4 gap-5 pt-16">
                    {products && products.map(product =>
                        <div className="flex flex-col gap-2" key={product.id}>
                            <img src={product.thumbnail} alt="" />
                            <strong>{product.title}</strong>
                            <p>{product.description.slice(0, 35) + '...'}</p>
                            <div className="flex gap-2 items-end">
                                <b className="text-lg">Price: </b>
                                <b className="text-red-500 text-lg">{product.discountPercentage}</b>
                                <p className="line-through text-gray-600">{product.price}</p>
                            </div>
                            {
                                product.stock > 0 ? <button className="w-full bg-black text-white py-2 mt-4 transition-all shadow-sm hover:scale-95 hover:shadow-lg hover:opacity-90" onClick={() => handleAddToCart(product)}>Add to cart</button> : <p>Out of stock</p>
                            }
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home