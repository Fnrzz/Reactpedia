import Products from "../components/Products";

const Electronics = () => {
  return (
    <div className="min-vh-100">
      <div className="container d-flex flex-column align-items-center mt-5">
        <h1 className="text-center fw-bold font-big">ELECTRONICS COLLECTION</h1>
        <p className="text-center mt-3 text-muted w-md-50">
          Discover the latest in technology and innovation with our electronics
          collection. Find everything you need for a connected and modern
          lifestyle, from top gadgets to essential devices.
        </p>
      </div>
      <div className="container mt-3">
        <Products category={"electronics"} />
      </div>
    </div>
  );
};

export default Electronics;
