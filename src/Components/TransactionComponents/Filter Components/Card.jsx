import React from 'react'
import { NavLink } from 'react-router-dom'
const Card = ({className}) => {
  return (
    <div >
      <NavLink className={className}>Cards</NavLink>
    </div>
  )
}

export default Card