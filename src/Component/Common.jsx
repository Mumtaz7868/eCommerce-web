import React from "react";
import { Link } from "react-router-dom";
const Common = ({ name, btnName, imgSrc, visit }) => {
  return (
    <>
      <section
        id="header"
        className="border border-3 d-flex align-items-center"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 max-auto" id="how">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {name}
                    <strong className="brand-name"> M H Khan</strong>
                  </h1>
                  <h2 className="my-2">
                    We Are The Team Of Talented Developer Making Websites
                  </h2>
                  <div className="mt-3 ">
                    <Link to={visit} className="btn-get-started mb-5">
                      {btnName}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={imgSrc}
                    className="img-fluid animated"
                    alt="image here"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
