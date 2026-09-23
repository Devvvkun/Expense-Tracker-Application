import React from 'react'
import Navbar from './Components/Navbar'
import Transactions from './Components/NavPages/Transactions'

const Body = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Transactions />
        </div>
    </div>
  )
}

export default Body