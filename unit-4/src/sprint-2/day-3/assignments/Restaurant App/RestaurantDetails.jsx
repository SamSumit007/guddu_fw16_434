import React, { useEffect, useState } from "react";
import AddRestaurant from "./AddRestaurant";
import Restaurant from "./Restaurant";
import styles from "./Restaurant.module.css";

export default function RestaurantDetails() {
  const [Restorantdata, setRestorantdata] = useState([]);
  const [SortRating, setSortRating] = useState([]);
  const [common,setcommon] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:3000/RestaurantDetails");
      let data = await res.json();
      console.log(data);
      setRestorantdata(data);
      setSortRating(data);
      setcommon(data)
    };
    getData();
  }, []);
  const fourStar = () => {
    const filterData1 = SortRating.filter(
      (elem) => elem.rating >= 4 && elem.rating < 5
    );
    setRestorantdata(filterData1);
  };

  const threeStar = () => {
    const filterData2 = SortRating.filter(
      (elem) => elem.rating >= 3 && elem.rating < 4
    );
    setRestorantdata(filterData2);
  };
  const twoStar = () => {
    const filterData3 = SortRating.filter(
      (elem) => elem.rating >= 2 && elem.rating < 3
    );
    setRestorantdata(filterData3);
  };
  const oneStar = () => {
    const filterData4 = SortRating.filter(
      (elem) => elem.rating >= 1 && elem.rating < 2
    );
    setRestorantdata(filterData4);
  };
  const cash = () => {
    const filtered = SortRating.filter((elem) => elem.Payment_method==="cash");
    setRestorantdata(filtered);
  };
  const card = () => {
    const filtered = SortRating.filter((elem) => elem.Payment_method==="card");
    setRestorantdata(filtered);
  };
  const all_p = () => {
    const filtered = SortRating.filter((elem) => elem.Payment_method==="all");
    setRestorantdata(filtered);
  };
  const h2l = () => {
    // console.log(l2h)
    const filteredA = common.sort((a, b) => b.cost - a.cost);
    console.log(filteredA)
    setRestorantdata(filteredA);
  };
  const l2h = () => {
    const filtered = common.sort((a, b) =>a.cost - b.cost);
    console.log(filtered)
    setRestorantdata(filtered);
  };

  return (
    <>
      <h1 id={styles.header}>MY RESTAURANT</h1>
      <div id={styles.mainDiv}>
        <div id={styles.formDiv}>
          <AddRestaurant />
          <div id={styles.sortdiv}>
            <h3>Sort with rating:</h3>
            <button onClick={fourStar}>4 Star</button>
            <button onClick={threeStar}>3 Star</button>
            <button onClick={twoStar}>2 Star</button>
            <button onClick={oneStar}>1 Star</button>
          </div>
          <div id={styles.sortdiv}>
            <h3>Payment method:</h3>
            <button onClick={cash}>Cash Only Res.</button>
            <button onClick={card}>Card Accepted Res.</button>
            <button onClick={all_p}>All</button>
          </div>
          <div id={styles.sortdiv}>
            <h3>Sort By Price::</h3>
            <button onClick={h2l}>High To low</button>
            <button onClick={l2h}>Low to High</button>
          </div>
        </div>
        <div id={styles.displayDiv}>
          {Restorantdata.map((elem) => {
            return <Restaurant key={elem.id} {...elem} />;
          })}
        </div>
      </div>
    </>
  );
}
