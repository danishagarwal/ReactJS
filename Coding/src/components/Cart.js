import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import FoodItemsInCart from "./FoodItemsInCart";

const Cart = () => {

    const cartItems = useSelector(redux_store => redux_store.cart.items);

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <h1>Total items {cartItems.length}</h1>
            <button className="bg-green-50 p-2" onClick={() => { handleClearCart() }}> Clear Cart</button>
            <div className="flex">
                {cartItems.map((item) => (
                    <FoodItemsInCart key={item.id} {...item} />
                )

                )}
            </div>
        </div>

    )
}

export default Cart;