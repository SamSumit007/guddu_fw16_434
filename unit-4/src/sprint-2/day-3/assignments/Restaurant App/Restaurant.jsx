import React from 'react'
import styles from "./Restaurant.module.css";

export default function Restaurant(props) {
    const {card_payment,total_votes,reviews1,rating,cost,catogeries,imageUrl,name,id}=props
  return (
    <div id={styles.frame}>
        <div><img src={imageUrl} /></div>
        <div>
            <h3>{name}</h3>
            <p>Catogeries: {catogeries}</p>
            <p>RS. {cost} per one</p>
            <p>{card_payment}</p>
        </div>
        <div>
            <h3 id={styles.rate}>{rating}*</h3>
            <p>{total_votes} Votes</p>
            <p>{reviews1} Reviews</p>
        </div>
    </div>
    
  )
}
