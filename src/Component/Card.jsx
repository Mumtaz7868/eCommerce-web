import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getProduct = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const actualData = await result.json();
    console.log(actualData, "title");
    setData(actualData);
  };
  useEffect(() => {
    getProduct();
  }, []);
  const navigateToProductPage = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      {data.map((val) => (
        <div className="col-md-4 col-10 mt-5 cardCenter">
          <div key={val.id} className="card ">
            <img
              src={val.image}
              className="card-img-top img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <p className="card-title font-weight-bold mt-2 titleButton ">
                {val.title}
              </p>
              <p className="card-text  fw-bold pt-2">Price ={val.price}</p>
              <button
                onClick={() => navigateToProductPage(val.id)}
                className="btn btn-primary"
              >
                Go To Detail
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
