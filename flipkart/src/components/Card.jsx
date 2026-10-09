import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <h1>{props.name}</h1>
        <h4>{props.specialization}</h4>
        <h4>{props.gender}</h4>
        <button>View Details</button>
    </div>
  )
}

export default Card
