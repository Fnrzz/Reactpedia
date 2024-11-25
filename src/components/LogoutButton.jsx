const LogoutButton = () => {
  const handlerLogout = () => {
    localStorage.removeItem("access_token");
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <button onClick={handlerLogout} className="nav-link">
      Logout
    </button>
  );
};

export default LogoutButton;
