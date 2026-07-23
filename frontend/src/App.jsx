import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Doctor from './pages/Doctors'
import MyProfile from './pages/MyProfile'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:specialty' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/myprofile' element={<MyProfile />} />
 <Route path='/myappointments' element={<MyAppointments />} />
      <Route path='/appointments/:docId' element={<Appointment/>} />
      </Routes> 
    </div>
  )
}

export default App
