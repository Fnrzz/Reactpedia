import { useSelector, useDispatch } from "react-redux";
import {
  addQuantityCart,
  removeItemCart,
  removeQuantityCart,
} from "../store/actions/cartActions";

const CartItems = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  const handleAddQuantity = (productId) => {
    dispatch(addQuantityCart(productId));
  };

  const handleRemoveQuantity = (productId) => {
    dispatch(removeQuantityCart(productId));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItemCart(productId));
  };

  return (
    <>
      <h3 className="mb-5">Your Chart</h3>
      {cart.map((product, index) => {
        return (
          <div key={index} className=" mb-4">
            <div className="row g-3">
              <div className="col-12 col-md-4 d-flex justify-content-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="image-cart"
                />
              </div>
              <div className="col-12 col-md-8">
                <div className="d-flex">
                  <h5 className="fw-bold">{product.title}</h5>
                </div>
                <span className=" fs-5">${product.price}</span>
                <p className="text-muted fs-6 mt-2">
                  Category : {product.category}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn p-0"
                    onClick={() => handleRemoveItem(product.id)}
                  >
                    <i className="bi bi-trash fs-5 text-muted"></i>
                  </button>
                  <div className="d-flex align-items-center">
                    {product.quantity === 1 ? (
                      <button
                        className="btn btn-sm btn-outline-secondary rounded-circle"
                        disabled
                      >
                        <i className="bi bi-dash fs-5"></i>
                      </button>
                    ) : (
                      <button
                        className="btn btn-sm btn-outline-dark rounded-circle"
                        onClick={() => handleRemoveQuantity(product.id)}
                      >
                        <i className="bi bi-dash fs-5"></i>
                      </button>
                    )}
                    <span className="mx-3 my-0">{product.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-dark rounded-circle"
                      onClick={() => handleAddQuantity(product.id)}
                    >
                      <i className="bi bi-plus fs-5 "></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default CartItems;
