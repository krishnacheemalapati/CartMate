
import { AiOutlineShoppingCart } from "react-icons/ai"
function Cart({ name }) {
    return (
        <div className="cart">
            <div>{name}</div>
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </div>
    )
}

export default Cart