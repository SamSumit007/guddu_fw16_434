import React, { useContext, useState } from "react";
import AddToCart from "./AddToCart";
import { AuthContext } from "./Contexts/AuthContext";
import styles from "./Styled/Product.module.css";

function Product(data) {
  const { cartData, setcartData,token } = useContext(AuthContext);
  const { discount, imgURL, mrp, sellingPrice, title } = data;

  const handlecart = () => {
    if(token){
      setcartData([data,...cartData])
    }
  };
  
  return (
    <div id={styles.mainFrame}>
      <img src={imgURL} />
      <p>{title}</p>
      <div id={styles.pricediv}>
        <p>{sellingPrice}</p>
        <p style={{ margin: "auto 5px", textDecoration: "line-through" }}>
          {mrp}
        </p>
        <p style={{ color: "green" }}>{discount}</p>
      </div>
      <AddToCart handlecart={handlecart} />
    </div>
  );
}

export default Product;
