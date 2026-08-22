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
          ? <input type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p>{userData.name}</p>
      }
      <hr />

      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
            isEdit
              ? <input type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p>{userData.phone}</p>
          }
          <p>address</p>
          {
            isEdit
              ? <p>
                <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.value.line1} type="text" />
                <br />
                <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.value.line2} type="text" />
              </p>
              : <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }


        </div>

      </div>
      <div>
        <p>BASIC INFORMATION</p>\
        <div>
          <p>Gender:</p>
          {
            isEdit
              ? <select>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p>{userData.name}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default MyProfile
