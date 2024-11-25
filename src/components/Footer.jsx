const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="container mb-4">
        <div className="row row-cols-1 row-cols-lg-2 g-3">
          <div className="col">
            <h1 className="fw-bold">Reactpedia</h1>
            <p className="text-muted w-md-75">
              Get newsletter update for upcoming product and best discount for
              all item
            </p>
            <form action="" className="mt-3 d-flex gap-2 w-md-75">
              <input
                type="email"
                className="form-control rounded-pill"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn btn-dark rounded-pill w-50">
                Submit
              </button>
            </form>
          </div>
          <div className="col">
            <div className="row row-cols-1 row-cols-lg-3 justify-content-end">
              <div className="col">
                <h5 className="fw-bold">Categories</h5>
                <ul className="list-unstyled">
                  <li>Men</li>
                  <li>Women</li>
                  <li>Jewelery</li>
                  <li>Electronics</li>
                </ul>
              </div>
              <div className="col">
                <h5 className="fw-bold">Our Social Media</h5>
                <ul className="list-unstyled">
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Youtube</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark py-5">
        <div className="container d-flex justify-content-center">
          <small className="text-white m-0 ">
            © 2023 Reactpedia. All rights reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
