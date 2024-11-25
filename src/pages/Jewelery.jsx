import Products from "../components/Products";

const Jewelery = () => {
  return (
    <div className="min-vh-100">
      <div className="container d-flex flex-column align-items-center mt-5">
        <h1 className="text-center fw-bold font-big">JEWELRY COLLECTION</h1>
        <p className="text-center mt-3 text-muted w-md-50">
          Explore our exquisite jewelry collection and find timeless pieces that
          add elegance to any look. Discover rings, necklaces, bracelets, and
          more, crafted to perfection.
        </p>
      </div>
      <div className="container mt-3">
        <Products category={"jewelery"} />
      </div>
    </div>
  );
};

export default Jewelery;
