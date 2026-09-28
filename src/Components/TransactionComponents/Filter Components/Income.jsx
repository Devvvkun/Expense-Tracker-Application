import React from 'react'
import { NavLink } from 'react-router-dom'
const Income = () => {
    function FilterDivClicked({isActive}){
        return `${isActive ? 'bg-green-400': 'bg-gray-300'} w-19 h-10 flex justify-center items-center rounded-sm px-4 py-2 `
    }
  return (
    <div className=''> <NavLink className=
    {FilterDivClicked}>Income</NavLink> </div>
  )
}

export default Income