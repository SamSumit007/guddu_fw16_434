import React from "react";

function AddToCart({handlecart}) {
  return (
    <div>
      <button style={{ width: "80%", padding: "10px" }}  onClick={()=>{handlecart()}}>Add To Cart</button>
    </div>
  );
}

export default AddToCart;
