import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {data} from './Body'

function CardDetails() {
  const [card,setcard] = useState<data[]>([]);
  const [loading,setloading] = useState(false)
  const {id} = useParams();

  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:8080/products?id=${id}`)
      .then(({data}) => {
        // let Data = data.filter(((elem:any) =>elem.id == id));
        // console.log(Data)
        setloading(false)
        console.log(data)
        setcard(data);
        

        })
      .catch((e) => console.log(e));
  }, []);
  if(loading) return <h1>Loading....</h1>
  return (
    <div className="product">
      <span>
        <h4 className="detailsTitle"></h4>
      </span>
      <img className="detailsImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7coDbRWUTzE9_XdGdXYcyN27nwoGtwUK4gQ&usqp=CAU" alt="" />
      <br />
      {/* Notice the "Price: $". do not edit it. */}
      <span className="detailsPrice">Price: ${}</span>
      <span className="detailsPrice"></span>
      <div>
        <h5>Reviews:</h5>
        {/* Iterate over reviews and populate review like: 
        
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div>
        
        */}
      </div>
    </div>
  );
}
export { CardDetails };
