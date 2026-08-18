import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Edward Vinston',
    image: assets.profile_pic,
    email: 'edward.vinston@example.com',
    phone: '+1 234 567 890',
    address: {
      line1: '123 Main Street, ',
      line2: "circle church road london"
    },
    gender: 'Male',
    dob: '2002-1-2'
  })

  const [isEdit, setIsEdit] = useState(false)
  return (
    <div>
      <img src={userData.image} alt="" />


      {
        isEdit
          ? <input type='text' onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p>{userData.name}</p>
      }
    </div>
  )
}

export default MyProfile