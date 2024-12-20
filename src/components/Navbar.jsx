import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import { useState, useEffect } from "react";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(
    !!localStorage.getItem("access_token")
  );

  const cart = useSelector((state) => state.cartReducer.cart);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLogin(!!localStorage.getItem("access_token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          Reactpedia
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/women">
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/electronics">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/jewelery">
                Jewelery
              </Link>
            </li>
            <div className="d-none d-lg-block vr mx-3"></div>
            <hr className="d-lgnone d-sm-block my-3" />
            {isLogin && (
              <li className="nav-item me-3 ">
                <Link className="nav-link position-relative cart" to="/cart">
                  <i className="bi bi-bag fs-5"></i>
                  {cart.length > 0 && (
                    <div className="total-pill">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </div>
                  )}
                </Link>
              </li>
            )}
            <li className="nav-item">
              {isLogin ? (
                <LogoutButton />
              ) : (
                <ModalLogin teksButton={"Login"} className={"nav-link"} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
