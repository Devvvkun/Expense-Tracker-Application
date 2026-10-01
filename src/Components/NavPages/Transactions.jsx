import { useState } from 'react'
import TransactionBody from "../TransactionComponents/TransactionBody"
import TransactionHeader from '../TransactionComponents/TransactionHeader'
import SearchBar from '../DashboardComponents/SearchBar'
import TransactionCalender from '../TransactionComponents/TransactionCalender'
import FilterDivHeader from '../TransactionComponents/FilterDivHeader'
import TransactionsData from '../../Data/TransactionsData'
const Transactions = () => {
    const [editDate , seteditDate] = useState(false);
    const [Startdate, setStartdate] = useState(TransactionsData[29].date)
    const [Enddate, setEnddate] = useState(TransactionsData[0].date)  
    const filteredData =  TransactionsData.filter(Transaction => Startdate <= Transaction.date && Transaction.date <= Enddate)
    const filteredDate = TransactionsData.map(transaction => transaction.date)
    const sortedDate = filteredDate.sort()
    let minDate = sortedDate[0]
    let maxDate = sortedDate[29]
    
  return (
    <div className=' h-screen overflow-auto'>
        <TransactionHeader />
        <div className="filter flex justify-between">
          <div className="search pl-6 -pt-3 -mt-6"><SearchBar /></div>
           <TransactionCalender
    minDate={minDate}
    maxDate={maxDate}
    editDate={editDate}
    seteditDate={seteditDate}
    Startdate={Startdate}
    Enddate={Enddate}
    setEnddate={setEnddate}
    setStartdate={setStartdate}
 />
        </div>
        <FilterDivHeader />
        <TransactionBody filteredData={filteredData} />
      </div>
  )
}

export default Transactions