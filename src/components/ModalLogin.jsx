import { useState } from "react";
import login from "../features/authenticate";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const ModalLogin = ({ teksButton, className }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const isLogin = await login(username, password);
    if (isLogin) {
      window.dispatchEvent(new Event("storage"));
      setIsLoading(false);
      handleModal();
      navigate("/");
    } else {
      setIsLoading(false);
      setError("Invalid email or password");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <button type="button" className={className} onClick={handleModal}>
        {teksButton}
      </button>

      {isOpenModal && (
        <>
          <div className="modal-backdrop fade show"></div>
          <div
            className="modal fade show d-block"
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
                    onClick={handleModal}
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
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
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
                  {isLoading ? (
                    <div className="d-grid">
                      <button className="btn btn-dark rounded-pill disabled">
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          aria-hidden="true"
                        ></span>
                        <span role="status">Loading...</span>
                      </button>
                    </div>
                  ) : (
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-dark rounded-pill"
                        onClick={handleSubmit}
                      >
                        Login
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

ModalLogin.propTypes = {
  teksButton: PropTypes.string,
  className: PropTypes.string,
};

export default ModalLogin;
