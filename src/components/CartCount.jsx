import { useSelector } from "react-redux";
const CartCount = () => {
  const total = useSelector((state) => state.total);
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
        <button className="btn btn-dark btn-lg rounded-pill">
          Checkout Now
        </button>
      </div>
    </>
  );
};

export default CartCount;
