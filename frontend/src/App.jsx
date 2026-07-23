import React from 'react'
import { Routes } from 'react-router-dom'
const App = () => {
import Home from './pages/Home'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Contact from './pages/Contact'
  return (
    <div className='mx-4 sm:mx-[10%]'>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/my-appointments' element={<MyAppointments />} />
      <Route path='/my-profile' element={<MyProfile />} />
      <Route path='/contact' element={<Contact />} />
      </Routes> 
    </div>
  
  )
}

export default App
