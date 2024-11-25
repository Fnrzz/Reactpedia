const LogoutButton = () => {
  const handlerLogout = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  };
  return (
    <button onClick={handlerLogout} className="nav-link">
      Logout
    </button>
  );
};

export default LogoutButton;
