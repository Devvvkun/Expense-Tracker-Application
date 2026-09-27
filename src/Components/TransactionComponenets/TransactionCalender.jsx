import { useState } from 'react'
import { Calendar , ChevronDown } from 'lucide-react'
import TransactionsData from '../../Data/TransactionsData'
const TransactionCalender = () => {
    const [editDate , seteditDate] = useState(false)
    console.log(editDate);
    
    const [Startdate, setStartdate] = useState(TransactionsData[0].date)
    const [Enddate, setEnddate] = useState(TransactionsData[29].date)
    return (
    <div className='w-auto ml-6'>
        <div onClick={() => seteditDate(!editDate) } className='flex gap-2 bg-gray-300 px-4 py-2 rounded-xl mr-6 relative z-2'> <Calendar /> {Startdate} to {Enddate} <ChevronDown /></div>
        <div className={` ${editDate ? "block" : "hidden"} popupdate bg-gray-300 h-50 rounded-bl-xl rounded-br-xl w-70.5 relative -top-2 z-1 flex flex-col gap-2`}>
            <div className='pt-4 pl-6 flex flex-col'>
              <label htmlFor="sDate">Start Date:</label>
              <input className='w-35 outline-1 rounded-sm px-4 py-1 mt-2 ml-4' type="date" id='sDate'/>
            </div>
            <div className='pt-2 pl-6'>
              <label htmlFor="eDate">End Date Date:</label>
              <input className='w-35 outline-1 rounded-sm px-4 py-1 mt-2 ml-4'  type="date" id='eDate'/>
            </div>
        </div>
    </div>
  )
}

export default TransactionCalender