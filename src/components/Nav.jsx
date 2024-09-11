import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="bg-black">
        <div className="w-full max-w-[1366px] h-full mx-auto px-4">
          <div className="flex justify-between items-center gap-8 py-5">
            <strong className="text-white text-2xl">Add to cart</strong>
            <ul className="flex items-center gap-3">
                <li className="text-white text-xl"><Link to="/">Home</Link></li>
                <li className="text-white text-xl"><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Nav