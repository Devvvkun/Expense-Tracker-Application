import React from 'react'
const Card = ({Activebtn , setActivebtn}) => {
  return (
    <div >
      <button className={ Activebtn == 'Card' ? 'filter-active' : 'filter-inactive'} onClick={()=> setActivebtn('Card')}>Card </button>
    </div>
  )
}

export default Card