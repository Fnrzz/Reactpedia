import { useNavigate } from "react-router-dom";
const LogoutButton = () => {
  const navigate = useNavigate();
  const handlerLogout = () => {
    localStorage.removeItem("access_token");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };
  return (
    <button onClick={handlerLogout} className="nav-link">
      Logout
    </button>
  );
};

export default LogoutButton;
