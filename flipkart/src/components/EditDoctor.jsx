import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditDoctor() {
    const[name,setname]=useState("");
    const[age,setage]=useState("");
    const[salary,setsalary]=useState("");
    const[specialization,setspecialization]=useState("");
    const[gender,setgender]=useState("");
    const[loading,setLoading]=useState(false);


    const navigate=useNavigate();
    const params=useParams();

    async function handleSubmit(event){
        event.preventDefault();
        setLoading(true);
        // validation
        let obj={
            name,
            age,
            salary,
            specialization,
            gender
        }
        console.log(obj)

        try{
            let res=await axios.put(`http://localhost:3000/doctors/${params.id}`,obj)
            console.log(res);
            alert("updated successfully...");
            // navigate to details page
            navigate(-1);
        }
        catch(err){
            alert("something went wrong")
        }
        finally{
            setLoading(false)
        }
    }

    async function getData(){
        let res=await axios.get(`http://localhost:3000/doctors/${params.id}`)
        console.log(res.data);
        setname(res.data.name)
        setgender(res.data.gender)
        setage(res.data.age)
        setsalary(res.data.salary)
        setspecialization(res.data.specialization)
    }

    useEffect(()=>{
        getData();
    },[])

    
  return (
     <div >

            <h1 >Edit Doctor</h1>

            <form className="form" onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>

                <input
                    type="text"
                    placeholder="Enter Doctor Name"
                    className="text-box"
                    onChange={function(event){
                        setname(event.target.value)
                    }}
                    value={name}
                />

                <label htmlFor="number">Age</label>
                <input
                    type="number"
                    placeholder="Enter Age"
                    className="text-box"
                     onChange={(event)=>setage(event.target.value)}
                    value={age}
                />

                <label htmlFor="gender">Gender</label>
                <select
                    className="text-box"
                     onChange={(event)=>setgender(event.target.value)}
                     value={gender}
                >

                    <option value="">
                        Select Gender
                    </option>

                    <option value="Male">
                        Male
                    </option>

                    <option value="Female">
                        Female
                    </option>

                </select>


                <label htmlFor="specialization">Specialization</label>
                <input
                    type="text"
                    placeholder="Enter Specialization"
                    className="text-box"
                     onChange={(event)=>setspecialization(event.target.value)}
                    value={specialization}
                />


                <label htmlFor="salary">Salary</label>
                <input
                    type="number"
                    placeholder="Enter Salary"
                    className="text-box"
                     onChange={(event)=>setsalary(event.target.value)}
                     value={salary}

                />

            

                <button className="btn-2" style={{ backgroundColor: "#1D51EC", color: "white" }} >
                    {loading==true?"Loading...":"Edit Doctor"}
                </button>

            </form>

        </div>
  )
}

export default EditDoctor
