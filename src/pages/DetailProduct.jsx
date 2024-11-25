import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchProductById from "../features/getProdcutById";
import Modal from "../components/Modal";
import AddCartButton from "../components/AddCartButton";
const DetailProduct = () => {
  const [product, setProduct] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchProductById(id);
      setProduct(data);
      setIsLoading(false);
      setIsLogin(localStorage.getItem("access_token") ? true : false);
    };
    fetchData();
  }, [id]);
  return (
    <>
      <div className="container mb-5">
        <Link to={-1} className="text-decoration-none text-dark pointer">
          <i className="bi bi-arrow-left-circle"></i> Back
        </Link>
      </div>
      {isLoading ? (
        <div className="d-flex justify-content-center mt-5 min-vh-100">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="container mt-3 py-3">
            <div className="row align-items-center">
              <div className="col-12 col-lg-4 d-flex justify-content-center mb-5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="image-detail-product"
                />
              </div>
              <div className="col-12 col-lg-8 px-4">
                <h1 className="fw-bold fs-5 w-md-75 mb-4">{product.title}</h1>
                <span className="border border-secondary rounded-pill px-3 py-1 fs-6">
                  {product.category}
                </span>
                <p className="text-muted mt-4">{product.description}</p>
                <h4 className="fw-bold">${product.price}</h4>
                {isLogin ? (
                  <AddCartButton productId={product.id} />
                ) : (
                  <Modal
                    teksButton="Add to Cart"
                    className="btn btn-outline-success mt-4 w-sm-100"
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailProduct;
