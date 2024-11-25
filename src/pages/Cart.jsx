import CartCount from "../components/CartCount";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="container min-vh-100 py-3">
      {cart.length === 0 ? (
        <div className="d-flex justify-content-center">
          <p className="fw-bold">Cart is empty</p>
        </div>
      ) : (
        <div className="row">
          <div className="col-12 col-md-7">
            <CartItems />
          </div>
          <div className="col-12 col-md-5">
            <CartCount />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
