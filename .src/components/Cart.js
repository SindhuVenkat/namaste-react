import { useDispatch, useSelector } from "react-redux";
import Accordionbody from "./Accordionbody";
import { clearItem } from "../utls/Cartslice";

const Cart = () => {
    
   const cartItems = useSelector((store) => store.cart1.items1 )
    console.log(cartItems)
    const dispatch = useDispatch()
    const HandleClearCart = () => {
            dispatch(clearItem())
    }
return (
    <div>
    <h1>Cart Page</h1>
    <button onClick={HandleClearCart}>Clear Cart</button>
    {cartItems?.length === 0 && (<h2>Cart is empty</h2>)}
 <Accordionbody item = {cartItems} />
 </div>
)

}

export default Cart;