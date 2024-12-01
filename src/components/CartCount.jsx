import { useSelector, useDispatch } from "react-redux";
import { updateStock } from "../store/actions/productActions";
import { clearCart } from "../store/actions/cartActions";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CartCount = ({ setShowModal }) => {
  const total = useSelector((state) => state.cartReducer.total);
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setShowModal(true);
    setTimeout(() => {
      if (cart.length > 0) {
        cart.map((item) => {
          const product = {
            id: item.id,
            quantity: item.quantity,
          };
          dispatch(updateStock(product));
        });
        dispatch(clearCart());
      }
      setShowModal(false);
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <div className="mb-10">
        <h3 className="mb-5">Summary</h3>
        <div className="d-flex justify-content-between">
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Estimated Delivery & Handling</p>
          <p>Free</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Estimated Taxes</p>
          <p>Free</p>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between mb-3">
        <h4>Total</h4>
        <h4>${total}</h4>
      </div>
      <div className="d-grid">
        <button
          className="btn btn-dark btn-lg rounded-pill"
          onClick={handleCheckout}
        >
          Checkout Now
        </button>
      </div>
    </>
  );
};

CartCount.propTypes = {
  setShowModal: PropTypes.func,
};

export default CartCount;
