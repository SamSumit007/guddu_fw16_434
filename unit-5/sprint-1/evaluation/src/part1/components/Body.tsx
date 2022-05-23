import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import "./style.css"

export type data ={
  id:number;
    product_name:string;

    rating: number,
    price: number
    category?:string
    desc?:string;
    reviews?:string
}

function Body() {
  const [data, setdata] = useState<data[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((r) => {
        console.log(r.data)
        setdata(r.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container">
      {/* Iterate over data and show `Card` here */}
      {data.map((elem)=><Card  key={elem.id} {...elem}/>)}
    </div>
  );
}

export { Body };
