import CartItems from "../components/CartItems";

const Cart = () => {
  return (
    <div className="container min-vh-100 py-3">
      <div className="row">
        <div className="col-12 col-md-7">
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default Cart;
