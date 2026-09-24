import React from 'react'
import UserPfp from '../Assets/UserPfp'

const UserDetail = () => {
  return (
    <div className='flex gap-2 absolute bottom-5'>
        <UserPfp />
        <div>
          <h3>User</h3>
          <p>Email@gmail.com</p>
        </div>
    </div>
  )
}

export default UserDetail