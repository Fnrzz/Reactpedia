import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addCart } from "../store/actions/cartActions";
import { useState } from "react";

const AddCartButton = ({ productId }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const handlerAddCart = () => {
    dispatch(addCart(productId));
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };
  return (
    <>
      <button
        className="btn btn-outline-success mt-4 w-sm-100"
        onClick={handlerAddCart}
      >
        Add to Cart
      </button>
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
                <h5 className="fw-bold mt-3">Added to Cart</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AddCartButton.propTypes = {
  productId: PropTypes.number,
};

export default AddCartButton;
