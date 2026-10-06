const Cash = ({Activebtn , setActivebtn}) => {
  return (
  
      <button className={ Activebtn == 'Cash' ? 'filter-active' : 'filter-inactive'} onClick={()=> setActivebtn('Cash')}>Cash</button>
  
  )
}

export default Cash