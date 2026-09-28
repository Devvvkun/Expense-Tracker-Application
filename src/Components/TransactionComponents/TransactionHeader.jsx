import React from 'react'
import AddTransactionBtn from './AddTransactionBtn'

const TransactionHeader = () => {
  return (
    <div className=' flex justify-between items-center h-22'>
        <div className="headertext pl-6">
            <p className='font-bold text-3xl'>Transactions</p>
            <p className='text-gray-500 '>Manage your Income and Expenses</p>
        </div>
        <div className="btn pr-6 "><AddTransactionBtn /></div>
    </div>
  )
}

export default TransactionHeader