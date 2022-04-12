import data from "./Data.json"
import React, { useState } from "react";


const RestorentDetails = ()=>{
    const [dish ,setdish] = useState("");
    const [imgurl ,setimageurl] = useState("");
    const [cost ,setcost] = useState("");
    const [catogeries ,setcatogeries] = useState("");
    const [votes ,setvotes] = useState("");
    const [review ,setreview] = useState("");
    const [ArrayData, setArrayData] = useState([]);
    
    const handledish=(e)=>{
        setdish(e.target.value)
    }
    const handlecost=(e)=>{
        setcost(e.target.value)
    }
    const handlecatogeries=(e)=>{
        setcatogeries(e.target.value)
    }
    const handlereview=(e)=>{
        setreview(e.target.value)
    }
    const handlevotes=(e)=>{
        setvotes(e.target.value)
    }
    const handleimgurl=(e)=>{
        setimageurl(e.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        let objectData={
            name:dish,
            card_payment:true,
            imageurl:imgurl,
            catogeries:catogeries,
            review:review,
            cost:cost,
            votes:votes
        }
        console.log(ArrayData)
        setArrayData([...ArrayData,objectData]);
    }
 
    return (
        <>
        <div style={{backgroundColor:"yellow", width:"fitContent"}}>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Enter Name of the dish" value={dish} onChange={handledish} />
                <br />
                <input type="text"  placeholder="Image url" value={imgurl} onChange={handleimgurl} />
                <br />
                <input type="text" placeholder="cost" value={cost} onChange={handlecost} />
                <br />
                <input type="text"  placeholder="Catogeries" value={catogeries} onChange={handlecatogeries}/>
                <br />
                <input type="text"  placeholder="Reviews" value={review} onChange={handlereview} />
                <br />
                <input type="text"  placeholder="Total votes" value={votes} onChange={handlevotes}/>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </div>

        </>
    ) 
}

export default RestorentDetails