import { useState } from "react"
import axios from 'axios'

function Demo(){
    const[data,setData]=useState([])
    async function getData(){
        let api="https://fakestoreapi.com/products"
        let res=await axios.get(api)
        setData(res.data);
    }
    let newArr=data.map((item)=>{
        return(
            <div className="col-4">
                <div className="card h-100" key={item.id}>
                    <img src={item.image} alt="" />
                    <h1>{item.price}</h1>
                    <h4>{item.title}</h4>
                </div>
            </div>
        )
    })
    return(
        <div>
            <button onClick={getData}>getData</button>
            <div className="row">
                {newArr}
            </div>
        </div>
    )
}

export default Demo