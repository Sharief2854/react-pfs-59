import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function DoctorDetails() {
    const[doctor,setDoctor]=useState({});

    const params=useParams();
    const navigate=useNavigate();

    async function getData(){
        let res=await axios.get(`http://localhost:3000/doctors/${params.id}`)
        setDoctor(res.data);
    }

    async function deleteDoctor(){
        try{
            await axios.delete(`http://localhost:3000/doctors/${params.id}`)
            alert("deleted...")
            navigate("/")
        }
        catch(err){
            alert("something went wrong");
        }

    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div>
        <h1>{doctor.name}</h1>
        <h1>{doctor.age}</h1>
        <h1>{doctor.salary}</h1>
        <Link to={`/editDoctor/${params.id}`}>
            <button>Edit</button>
        </Link>
        <button onClick={deleteDoctor}>Delete</button>
    </div>
  )
}

export default DoctorDetails
