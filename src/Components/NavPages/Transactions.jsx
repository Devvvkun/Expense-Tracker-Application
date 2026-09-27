
import TransactionHeader from '../TransactionComponenets/TransactionHeader'
import SearchBar from '../DashboardComponenets/SearchBar'
import TransactionCalender from '../TransactionComponenets/TransactionCalender'
const Transactions = () => {
  
  
  return (
    <div className=' h-screen'>
        <TransactionHeader />
        <div className="filter flex justify-between">
          <div className="search pl-6 -pt-3 -mt-6"><SearchBar /></div>
          <TransactionCalender />
        </div>
      </div>
  )
}

export default Transactions