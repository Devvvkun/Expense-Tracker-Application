import Add from './Filter Components/Add'
import Card from './Filter Components/Card'
import Cash from './Filter Components/Cash'
import Category from './Filter Components/Category'
import Expenses from './Filter Components/Expenses'
import Filter from './Filter Components/Filter'
import Income from './Filter Components/Income'
import UPI from './Filter Components/UPI'
const FilterDivHeader = () => {
    function FilterDivClicked({isActive}){
        return `${isActive ? 'bg-green-400': 'bg-gray-300'} w-19 h-10 flex justify-center items-center rounded-sm px-4 py-2 `
    }
  return (
    <div className='flex items-center justify-around mt-5'>
        <Add className={FilterDivClicked} />
        <Income className={FilterDivClicked}/>
        <UPI className={FilterDivClicked}/>
        <Card className={FilterDivClicked}/>
        <Cash className={FilterDivClicked}/>
        <Expenses className={FilterDivClicked}/>
        <Category />
        <Filter />
    </div>
  )
}

export default FilterDivHeader