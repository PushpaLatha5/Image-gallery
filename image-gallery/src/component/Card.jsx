import React from 'react'
import "./Card.css"

export default function Card({img, text}) {
 
  return (
    <div>
      <div className="img-container">
        <img src={img} alt="image" className='image' />
        <p>{text}</p>

      </div>
    </div>
  )
}
