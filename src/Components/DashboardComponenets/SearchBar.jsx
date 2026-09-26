import React from 'react'
import { Search } from 'lucide-react'
const SearchBar = () => {
  return (
    <div>
        <span><Search color='gray' size={25} className='absolute top-2 ml-2' /></span><input type="text" name="search" id="search" className='bg-gray-300 py-2 pr-50 pl-10 rounded-xl placeholder:absolute placeholder:left-10' placeholder='Search transactions,merchant,categories...'/>
    </div>
  )
}

export default SearchBar