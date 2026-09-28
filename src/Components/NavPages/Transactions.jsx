import TransactionBody from "../TransactionComponents/TransactionBody"
import TransactionHeader from '../TransactionComponents/TransactionHeader'
import SearchBar from '../DashboardComponents/SearchBar'
import TransactionCalender from '../TransactionComponents/TransactionCalender'
import FilterDivHeader from '../TransactionComponents/FilterDivHeader'
const Transactions = () => {
  
  
  return (
    <div className=' h-screen overflow-auto'>
        <TransactionHeader />
        <div className="filter flex justify-between">
          <div className="search pl-6 -pt-3 -mt-6"><SearchBar /></div>
          <TransactionCalender />
        </div>
        <FilterDivHeader />
        <TransactionBody />
      </div>
  )
}

export default Transactions