import React, { useEffect, useState } from "react";
import Product from "../Product";
import styles from "../Styled/Home.module.css"

function Home() {
  const [Gdata, setGdata] = useState([]);
  const [Tdata, setTdata] = useState([]);
  const [Pdata, setPdata] = useState([]);
  const [Poster1,setPoster1]= useState("")
  


useEffect(()=>{
  const getData = async ()=>{
    let res1 = await fetch("http://localhost:3000/Grocerys");
    let res2= await fetch("http://localhost:3000/BestDealsPoster");
    let res3= await fetch("http://localhost:3000/Trending");
    let data1 = await res1.json();
    let data2 = await res2.json();
    let data3 = await res3.json();

    setGdata(data1);
    setTdata(data3);
    setPdata(data2)
  };
  getData()
},[]);

// useEffect(()=>{
//   let x=0;
//   setInterval((Pdata) => {
//     if(x==Pdata.length-1){
//       x=0;
//     };
//     let poster = Pdata[x].imageUrl
//     setPoster1(poster);
//     x++;
//   }, 3000);
// },[])
 


  return (
    <div>
      <div id={styles.mainDiv}>
        <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_fom_m_bbpl-staples_460_190422_Bangalore.jpg" alt="" />
      </div>
      <div>
        <h2>Trending Produsts</h2>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",gap:"20px", margin:"auto 3%"}}> 
        {Tdata.map((elem)=>{
          return <Product key={elem.id} {...elem}/>
        })}
      </div>
      <div style={{border:"solid red 1px"}}> <h1>Footer component</h1> </div>
    </div>
  );
}

export default Home;
