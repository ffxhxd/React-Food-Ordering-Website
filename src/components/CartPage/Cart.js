import { useDispatch, useSelector } from "react-redux";
import ItemList from "../CategorieAccordian/ItemList";
import { clearCart } from "../../utils/Redux/cartSlice";
import "./cart.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="cart-container">
      <button onClick={handleClearCart}> clear </button>
      {cartItems.length === 0 && <h1> cart is empty</h1>}
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
