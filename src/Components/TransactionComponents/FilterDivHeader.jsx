import Add from './Filter Components/Add'
import Card from './Filter Components/Card'
import Cash from './Filter Components/Cash'
import Category from './Filter Components/Category'
import Expenses from './Filter Components/Expenses'
import Filter from './Filter Components/Filter'
import Income from './Filter Components/Income'
import Refund from './Filter Components/Refund'
import UPI from './Filter Components/UPI'
const FilterDivHeader = () => {
  return (
    <div className='flex items-center justify-around mt-5'>
        <Add  />
        <Income />
        <UPI />
        <Card />
        <Cash />
        <Expenses />
        <Refund />
        <Category />
        <Filter />
    </div>
  )
}

export default FilterDivHeader