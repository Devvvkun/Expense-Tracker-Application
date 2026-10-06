import React from 'react'
const Expenses = ({Activebtn , setActivebtn}) => {
  return (

      <button className={ Activebtn == 'Expenses' ? 'filter-active' : 'filter-inactive'} onClick={()=> setActivebtn('Expenses')}>Expenses</button>
  )
}

export default Expenses