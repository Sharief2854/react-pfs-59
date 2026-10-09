import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';

function Home() {
    const[doctors,setDoctors]=useState([]);

    async function getData(){
        let res=await axios.get("http://localhost:3000/doctors");
        console.log(res.data);
        setDoctors(res.data);
    }

    let newArr=doctors.map((item)=>{
        return (
            <Card name={item.name} gender={item.gender} specialization={item.specialization}/>
        )
    }); 

    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        {newArr}
    </div>
  )
}

export default Home
