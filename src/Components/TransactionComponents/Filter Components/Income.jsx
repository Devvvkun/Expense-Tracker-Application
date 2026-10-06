import React from 'react'
const Income = ({Activebtn , setActivebtn}) => {
  return (
     <button className={ Activebtn == 'Income' ? 'filter-active' : 'filter-inactive'} onClick={()=> setActivebtn('Income')}>Income</button>
  )
}

export default Income