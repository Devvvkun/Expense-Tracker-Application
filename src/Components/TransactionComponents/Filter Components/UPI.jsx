import React from 'react'
function UPI({Activebtn , setActivebtn}) {
  return (<button className={ Activebtn == 'UPI' ? 'filter-active' : 'filter-inactive'} onClick={()=> setActivebtn('UPI')}>UPI</button>
  )
}

export default UPI