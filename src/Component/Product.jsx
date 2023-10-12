import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const getSingalProduct = async () => {
    const result = await fetch(`https://fakestoreapi.com/products/${id}`);
    const actualData = await result.json();
    setData(actualData);
  };
  console.log(data, "data");
  useEffect(() => {
    getSingalProduct();
  }, []);
  return (
    <>
      <div className="mt-5 main">
        <div className="singalcard card">
          <img src={data.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title font-weight-bold  mt-5">{data.title}</h6>
            <p className="card-text mt-2">{data.description}</p>
            <strong className="card-text fw-bold mt-5">
              Price ={data.price}
            </strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
