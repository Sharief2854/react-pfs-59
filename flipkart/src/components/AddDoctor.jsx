import axios from 'axios';
import React, { useState } from 'react'

function AddDoctor() {
    const[name,setname]=useState("");
    const[age,setage]=useState("");
    const[salary,setsalary]=useState("");
    const[specialization,setspecialization]=useState("");
    const[gender,setgender]=useState("");

    async function handleSubmit(event){
        event.preventDefault();
        // validation
        let obj={
            name,
            age,
            salary,
            specialization,
            gender
        }
        console.log(obj)

        let res=await axios.post("http://localhost:3000/doctors",obj)
        console.log(res);
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
                    Add Doctor
                </button>

            </form>

        </div>
  )
}

export default AddDoctor
