import { useState } from "react";
import login from "../features/authenticate";
import PropTypes from "prop-types";
const Modal = ({ teksButton, className }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLogin = await login(username, password);
    if (isLogin) {
      window.location.reload();
    } else {
      setError("Invalid email or password");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <button
        type="button"
        className={className}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setError("")}
      >
        {teksButton}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-2">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body mb-5">
              <h1 className="fw-bold text-center mb-5">Login</h1>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="username"
                  onChange={changeUsername}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-pill"
                  id="exampleInputPassword1"
                  onChange={changePassword}
                />
              </div>
              {error && (
                <small className="d-block text-center text-danger mb-3">
                  {error}
                </small>
              )}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-dark rounded-pill"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  teksButton: PropTypes.string,
  className: PropTypes.string,
};

export default Modal;
