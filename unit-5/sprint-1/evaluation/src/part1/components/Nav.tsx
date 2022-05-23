import { Link, useNavigate } from "react-router-dom";
import  './style.css'


function Nav() {
  
  const navigate = useNavigate()
  return (
    <div className="nav">
      <span>
        <h3>
          <Link to={"/"}>Shopper</Link>
        </h3>
      </span>
      {/* Show follwing div only if we are not on /checkout page */}
      <div className="navCartStatus">
        Cart:
        <span className="navCartCount">{/* total items in cart here */}</span>
        <button className="navCartCheckout" onClick={()=>navigate("/checkout")} >Checkout</button>
        {/* on this button click user goes to checkout page */}
      </div>
    </div>
  );
}

export { Nav };
