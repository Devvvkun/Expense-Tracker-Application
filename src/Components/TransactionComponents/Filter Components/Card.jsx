import React from 'react'
const Card = ({Activebtn , setActivebtn}) => {
  return (
    
      <button className={ Activebtn == 'Card' ? 'filter-active' : 'filter-inactive'} onClick={()=> setActivebtn('Card')}>Card </button>
      )
}

export default Card