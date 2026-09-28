import React from 'react'
import { NavLink } from 'react-router-dom'
const Expenses = ({className}) => {
  return (
    <div>
      <NavLink className={className}>Expenses</NavLink>
    </div>
  )
}

export default Expenses