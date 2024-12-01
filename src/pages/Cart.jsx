import CartCount from "../components/CartCount";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";
import { useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const [showModal, setShowModal] = useState(false);

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
            <CartCount setShowModal={setShowModal} />
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="staticBackdrop"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden={!showModal}
        style={{ display: showModal ? "block" : "none" }}
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body py-5">
              <div className="text-center">
                <i className="bi bi-check-circle text-success display-1" />
                <h5 className="fw-bold mt-3">
                  Thank You <br /> for your order
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
