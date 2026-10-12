import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddDoctor() {
    const[name,setname]=useState("");
    const[age,setage]=useState("");
    const[salary,setsalary]=useState("");
    const[specialization,setspecialization]=useState("");
    const[gender,setgender]=useState("");
    const[loading,setLoading]=useState(false);


    const navigate=useNavigate();

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
            let res=await axios.post("http://localhost:3000/doctors",obj)
            console.log(res);
            alert("added successfully...");
            // navigate to home
            navigate("/");
        }
        catch(err){
            alert("something went wrong")
        }
        finally{
            setLoading(false)
        }
    }

    
  return (
     <div >

            <h1 >Add New Doctor</h1>

            <form className="form" onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>

                <input
                    type="text"
                    placeholder="Enter Doctor Name"
                    className="text-box"
                    onChange={function(event){
                        setname(event.target.value)
                    }}
                />

                <label htmlFor="number">Age</label>
                <input
                    type="number"
                    placeholder="Enter Age"
                    className="text-box"
                     onChange={(event)=>setage(event.target.value)}

                />

                <label htmlFor="gender">Gender</label>
                <select
                    className="text-box"
                     onChange={(event)=>setgender(event.target.value)}

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

                />


                <label htmlFor="salary">Salary</label>
                <input
                    type="number"
                    placeholder="Enter Salary"
                    className="text-box"
                     onChange={(event)=>setsalary(event.target.value)}

                />

            

                <button className="btn-2" style={{ backgroundColor: "#1D51EC", color: "white" }} >
                    {loading==true?"Loading...":"Add Doctor"}
                </button>

            </form>

        </div>
  )
}

export default AddDoctor
