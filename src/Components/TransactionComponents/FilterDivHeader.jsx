import { useState } from 'react'
import All from './Filter Components/All'
import Card from './Filter Components/Card'
import Cash from './Filter Components/Cash'
import Category from './Filter Components/Category'
import Expenses from './Filter Components/Expenses'
import Filter from './Filter Components/Filter'
import Income from './Filter Components/Income'
import Refund from './Filter Components/Refund'
import UPI from './Filter Components/UPI'
const FilterDivHeader = () => {
  const [Activebtn , setActivebtn] = useState("All")
  console.log(Activebtn);
  
  return (
    <div className='flex items-center justify-around mt-5'>
        <All Activebtn={Activebtn} setActivebtn={setActivebtn} />
        <Income Activebtn={Activebtn} setActivebtn={setActivebtn} />
        <UPI Activebtn={Activebtn} setActivebtn={setActivebtn} />
        <Card Activebtn={Activebtn} setActivebtn={setActivebtn} />
        <Cash Activebtn={Activebtn} setActivebtn={setActivebtn} />
        <Expenses Activebtn={Activebtn} setActivebtn={setActivebtn} />
        <Refund Activebtn={Activebtn} setActivebtn={setActivebtn} />
        <Category Activebtn={Activebtn} setActivebtn={setActivebtn} />
        <Filter Activebtn={Activebtn} setActivebtn={setActivebtn} />
    </div>
  )
}

export default FilterDivHeader