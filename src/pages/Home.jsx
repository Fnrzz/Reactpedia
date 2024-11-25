import Products from "../components/Products";

const Home = () => {
  return (
    <div className="min-vh-100">
      <div className="container d-flex flex-column align-items-center mt-5">
        <h1 className="text-center fw-bold font-big">
          MAN CLOTHING COLLECTION
        </h1>
        <p className="text-center mt-3 text-muted w-md-50">
          Find everything you need to look and feel your best,and shop the
          latest men&#39;s fashion and lifestyle products.
        </p>
      </div>
      <div className="container mt-3">
        <Products category={"men's clothing"} />
      </div>
    </div>
  );
};

export default Home;
