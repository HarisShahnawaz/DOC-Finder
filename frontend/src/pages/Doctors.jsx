import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import App from '../App'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
   const {speciality} = useParams()
   const [filterDoc ,setFilterDoc] = useState([])

   const navigate = useNavigate()
    
    const {doctors} = useContext(AppContext)

    const applyFilter = () => {
      if(speciality){
        setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
      }
      else{
        setFilterDoc(doctors)
      }
    }

    useEffect(()=>{
         applyFilter()
    },[doctors,speciality])
  return (
    <div className=''>
       <p>Browse through the doctors specialist.</p>
       <div>
        <div>
          <p>General physician</p>
          <p>Gynecologist</p>
           <p>Dermatologist</p>
           <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroentrologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-7.5 gap-y-6 '>
            {
              filterDoc.map((item, index) => (
                <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 overflow-hidden rounded-xl cursor-pointer hover:translate-y-2.5 transition-all duration-500' key={index}>
                    <img className='bg-blue-50 ' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center text-sm gap-2 text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                            <p>Available</p>
                        </div>
                        <p className='text-gray-900 text-base font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))
            }
        </div>
       </div>
    </div>
  )
}

export default Doctors