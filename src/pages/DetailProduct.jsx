import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalLogin from "../components/ModalLogin";
import AddCartButton from "../components/AddCartButton";
import { useSelector } from "react-redux";
const DetailProduct = () => {
  const [product, setProduct] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  let { id } = useParams();
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    const fetchData = () => {
      const data = products.find((product) => product.id === parseInt(id));
      setProduct(data);
      setIsLogin(localStorage.getItem("access_token") ? true : false);
    };
    fetchData();
  }, [id, products]);
  return (
    <>
      <div className="container mb-5">
        <Link to={-1} className="text-decoration-none text-dark pointer">
          <i className="bi bi-arrow-left-circle"></i> Back
        </Link>
      </div>
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
            <p className="text-muted ">Stock : {product.stock}</p>
            <h4 className="fw-bold">${product.price}</h4>
            {product.stock == 0 && (
              <p className="fw-bold text-danger">Product is out of stock</p>
            )}
            {!isLogin && product.stock > 0 ? (
              <ModalLogin
                teksButton="Add to Cart"
                className="btn btn-outline-success mt-4 w-sm-100"
              />
            ) : (
              product.stock > 0 && <AddCartButton dataProduct={product} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
