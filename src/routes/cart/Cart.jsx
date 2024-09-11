import { AiOutlinePlus } from "react-icons/ai"; 
import { CgMathMinus } from "react-icons/cg"; 
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../store/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.products);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
    }

    const productTotal = (product) => (product.discountPercentage * product.quantity).toFixed(2)
    const total = cartProducts.reduce((acc, product) => acc + product.discountPercentage * product.quantity, 0);
    const subtotal = (total * 0.88).toFixed(2);

    return (
        <div className="w-full max-w-[1366px] h-full mx-auto px-4 py-2 mb-10 pt-10">
            <div className="w-full flex justify-between items-start py-8">
                <b  className="text-4xl" >Cart</b>
                <div className="flex flex-col gap-2 border border-gray-400 p-5 rounded-xl shadow-lg transition-all hover:scale-110">
                    <span>total: <b className="text-lg">{total.toString().slice(0, 4)}</b></span>
                    <span>Items: <b className="text-lg">{cartProducts.reduce((acc, product) => acc + product.quantity, 0)}</b></span>
                    <span>Shipping free: <b className="text-lg">12%</b></span>
                    <span>Subtotal: <b className="text-lg">{subtotal.slice(0, 4)}</b></span>
                </div>
            </div>
            <table className="w-full">
                <thead>
                    <tr className='bg-gray-300 rounded-t-2xl'>
                        <th className='py-5 text-start pl-14'>Image</th>
                        <th className='py-5'>Name</th>
                        <th className='py-5 pr-20'>Price</th>
                        <th className='py-5'>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {cartProducts.map((product) => (
                        <tr key={product.id}>
                            <td className='border-b border-b-gray-400 py-6 text-center'><img className="w-10 ml-16" src={product.thumbnail} alt="" /></td>
                            <td className='border-b border-b-gray-400 py-6 text-center'>{product.title}</td>
                            <td className="border-b border-b-gray-400 py-6 text-center pr-20">
                                <b className="text-xl">${productTotal(product)}</b>
                            </td>
                            <td className='border-b border-b-gray-400 py-6 text-end'>
                                <div className="flex justify-center items-center gap-3">
                                    <button className="text-red-500 text-[24px] transition-all hover:scale-95" onClick={() => handleRemoveFromCart(product)}><CgMathMinus /></button>
                                    <b className="text-lg">{product.quantity}</b>
                                    <button className="text-green-500 text-[24px] transition-all hover:scale-95" onClick={() => handleAddToCart(product)}><AiOutlinePlus /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Cart

