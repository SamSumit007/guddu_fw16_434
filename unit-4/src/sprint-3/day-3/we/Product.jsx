import React from "react";
import { useParams } from "react-router-dom";

let data = {
  1: "Mouse",
  2: "Keyboard",
  3: "laptop",
};

function Product() {
  const { id } = useParams();
  return (
    <div>
      <h1>
        Product: {id} {data[id]}
      </h1>{" "}
    </div>
  );
}

export default Product;
