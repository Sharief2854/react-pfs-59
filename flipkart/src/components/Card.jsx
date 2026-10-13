import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card(props) {
  const navigate=useNavigate();

  return (
    <div className='card'>
        <h1>{props.name}</h1>
        <h4>{props.specialization}</h4>
        <h4>{props.gender}</h4>
        <button onClick={()=>{
          navigate(`/doctor/${props.id}`)
        }}>
          View Details
        </button>
    </div>
  )
}

export default Card
