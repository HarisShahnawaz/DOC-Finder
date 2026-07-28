import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import App from '../App'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
   const {speciality} = useParams()
    
    const {doctors} = useContext(AppContext)
  return (
    <div>
       
    </div>
  )
}

export default Doctors