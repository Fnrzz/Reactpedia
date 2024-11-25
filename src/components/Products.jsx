import { useState, useEffect } from "react";
import fetchProducts from "../features/getProductByCategory";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setFilteredProducts(products);
    } else {
      filterProducts();
    }
  };

  const filterProducts = () => {
    const filtered = products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchProducts(category);
      setProducts(data);
      setIsLoading(false);
      setFilteredProducts(data);
    };
    fetchData();
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-center mb-5 ">
            <input
              type="search"
              className="form-control w-md-25 rounded-pill px-4"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <div className="row row-cols-1 row-cols-md-4">
            {filteredProducts.map((product, index) => {
              return (
                <div className="col mb-5" key={index}>
                  <div className="d-flex flex-column justify-content-between h-100 w-100 px-4">
                    <div className="d-flex justify-content-center w-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="image-products"
                      />
                    </div>
                    <h5 className="mt-5 fw-bold">
                      {product.title
                        .replace("-", " ")
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}
                    </h5>
                    <p className="text-muted">
                      {product.description.split(" ").slice(0, 3).join(" ")}
                    </p>
                    <h6 className="fw-bold">$ {product.price}</h6>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-outline-dark w-100 mt-3"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

Products.propTypes = {
  category: PropTypes.string,
};

export default Products;
