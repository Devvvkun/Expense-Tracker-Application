import React from 'react'
const Refund = ({Activebtn , setActivebtn}) => {
  return (
    <div className={ Activebtn == 'Refund' ? 'filter-active' : 'filter-inactive'} onClick={()=> setActivebtn('Refund')}>Refund</div>
  )
}

export default Refund