import { useState } from "react";
import { Link } from "react-router-dom";
import {data} from './Body'
import "./style.css"
import {Addbutton} from './Button'

function Card(props: data) {
  const [cartdata , setCartdata] = useState(0);
  
  return (
    <div className="item">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7coDbRWUTzE9_XdGdXYcyN27nwoGtwUK4gQ&usqp=CAU' className="productImage" />
      <br />
      <span>
        <Link className="productLink" to={`/${props.id}`}>
          {/* Product Name */}
          {props.product_name}
        </Link>
      </span>
      <br />
      <span className="productCategory">{props.category}</span>
      <br />
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      <span className="productPrice">${props.price}</span>
      <br />
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span className="productRating">Ratings: {props.rating}</span>
      <br />
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      {/*
      <div className="itemInCart">Item Already in cart</div> 
       OR
      <button className="productAddtoCart">
        Add to cart
      </button>
      */}
      <Addbutton/>
    </div>
  );
}

export { Card };
