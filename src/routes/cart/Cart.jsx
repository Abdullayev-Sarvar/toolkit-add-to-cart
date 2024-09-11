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
  return (
    <div>Cart
           {
            cartProducts.map(product => 
                <div key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick={() => handleRemoveFromCart(product)}>-</button>
                    <p>{product.quantity}</p>
                    <button onClick={() => handleAddToCart(product)}>+</button>
                </div>
            )
        }
    </div>
  )
}

export default Cart