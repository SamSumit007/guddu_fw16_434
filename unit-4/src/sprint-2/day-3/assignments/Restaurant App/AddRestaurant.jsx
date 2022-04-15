import React, { useState } from 'react'
import styles from "./Restaurant.module.css";

export default function AddRestaurant() {
    const [formData,setformData] = useState({})

    const handlechange =(e)=>{
        const name = e.target.name;
            setformData({
                ...formData,
                [name]:e.target.value,
            })
    }
    const submitForm = (event)=>{
        if(formData){
            fetch("http://localhost:3000/RestaurantDetails",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formData)
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log(e));
        }
        event.preventDefault();
        
    }

  return (
    <div>
        <form onSubmit={submitForm}>
                <p className={styles.lebel}>Name:</p>
                <input type="text" name='name' placeholder="Enter Name of the dish" onChange={handlechange} />
                <p className={styles.lebel}>Image Url:</p>
                <input type="text" name='imageUrl'  placeholder="Image url" onChange={handlechange} />
                <p className={styles.lebel}>Cost:</p>
                <input type="number" name='cost' placeholder="cost" onChange={handlechange} />
                <p className={styles.lebel}>Rating:</p>
                <input type="number" name='rating' step="0.01" min="0" max="5" placeholder="Enter rating" onChange={handlechange} />
                <p className={styles.lebel}>votes:</p>
                <input type="number" name='total_votes' placeholder="vots" onChange={handlechange} />
                <p className={styles.lebel}>Review:</p>
                <input type="number" name='reviews1' placeholder="review" onChange={handlechange} />
                <br />
                <label>Catogeries</label>
                <select name="catogeries" onChange={handlechange} style={{marginTop:"20px"}}>
                    <option value="">Catogeries</option>
                    <option value="Vegeterian">Vegeterian</option>
                    <option value="Non_veg">Non_veg</option>
                    <option value="chainese">Chainese</option>
                </select>
                <br />
                <div style={{marginTop:"20px"}}>
                <label>Card Payment</label>
                <input type="checkbox" name="Payment_method" value="card" onChange={handlechange}/>
                <br />
                <label>Cash Payment</label>
                <input type="checkbox" name="Payment_method" value="cash" onChange={handlechange}/>
                <br />
                <label>All Payment</label>
                <input type="checkbox" name="Payment_method" value="all" onChange={handlechange}/>

                </div>
                

                <input id={styles.submit} type="submit" value="Submit"/>
        </form>
    </div>
  )
}
