import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {v4 as uuid} from 'uuid'
import styles from './style.module.css'

type laptopInfo={
    id:string;
    model:string;
    make_year:number;
    os:string;
    screen_height:number;
    screen_width:number;
    price:number;
}

export const DellAdmin = () => {
    const [formData,setformData] = useState({})
    const [data,setdata] = useState<laptopInfo[]>([]);
    const [data1,setdata1] = useState<laptopInfo[]>([]);

    const handleInput=(e: { target: any; })=>{
        const file = e.target ; 
        setformData({
            ...formData,
            [file.name]:file.value,
            id:uuid()
        }
        );
    }
    const handleSubmit =(e :React.SyntheticEvent)=>{
        e.preventDefault();
        axios
        .post("http://localhost:8080/laptopsData",formData)
        .then(getData)
        .catch(e=>console.log(e))
    }
    useEffect(()=>{
getData()
    },[])

    const getData = ()=>{
        axios("http://localhost:8080/laptopsData")
        .then(r=>{
            console.log(r.data)
            setdata(r.data);
            setdata1(r.data)
        })
        .catch(e=>console.log(e))
    }

    const shortByprice=()=>{
        let updatedata = data1.sort((a,b) => +(a.price) - +(b.price))
        setdata(updatedata)
        console.log(data)
    }
    const shortByYear = ()=> {
        let updatedata = data1.sort((a,b) => +(a.make_year) - +(b.make_year))
        setdata(updatedata)
        console.log(data)
    }
  return (<>
  <div>
        <h3>Add Products:</h3>
        <form onSubmit={handleSubmit}>
            <input className={styles.inp} placeholder='Model' type="text" name="model" onChange={handleInput} />
            <br />
            <input className={styles.inp} placeholder='Make year' type="number" name="make_year" onChange={handleInput}/>
            <br />
            <input className={styles.inp} placeholder='Operating system' type="text" name="os" onChange={handleInput}/>
            <br />
            <input className={styles.inp} placeholder='Screen Height' type="number" name="screen_height" onChange={handleInput}/>
            <br />
            <input className={styles.inp} placeholder='Screen Width' type="number" name="screen_width" onChange={handleInput}/>
            <br />
            <input className={styles.inp} placeholder='Price' type="number" name="price" onChange={handleInput}/>
            <br />
            <input id={styles.btn} type="submit" value="Add New Product"/>
        </form>
    </div>
    <h2>List of the Product</h2>
    <div>
        <button className={styles.sortbtn} onClick={shortByprice}>sort by price</button>
        <button className={styles.sortbtn} onClick={shortByYear}>sort by year</button>
    </div>
    <div style={{width:"fit-content",margin:"auto"}}>
        <table className={styles.table}>
            <thead className={styles.head} >
                <tr  >
                <th >Model</th>
                <th>Operating System</th>
                <th>Making Year</th>
                <th>Screen Height</th>
                <th>Screen Width</th>
                <th>Price</th>
                </tr>
                
            </thead>
            <tbody>
                {data.map((item)=> <tr key={item.id}>
                    <td>{item.model}</td>
                    <td>{item.os}</td>
                    <td>{item.make_year}</td>
                    <td>{item.screen_height}</td>
                    <td>{item.screen_width}</td>
                    <td>{item.price}</td>
                </tr> )}
            </tbody>
        </table>

    </div>
  </>
    
  )
}
function price(price: any) {
    throw new Error('Function not implemented.')
}

