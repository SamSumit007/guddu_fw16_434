import React from "react";
import { Link, Outlet } from "react-router-dom";

let data = [
  {
    id: 1,
    name: "monitor",
  },
  {
    id: 2,
    name: "Laptop",
  },
  {
    id: 3,
    name: "Mouse",
  },
];

function Products() {
  return (
    <div>
      <h1>Products</h1>

      <div style={{ display: "grid", gridAutoColumns: "1fr 1fr" }}>
        <div>
          {data.map((elem) => (
            <div key={elem.id}>
              <Link to={`/products/${elem.id}`}>{elem.name} </Link>
            </div>
          ))}
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Products;
