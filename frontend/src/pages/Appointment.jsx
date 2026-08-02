import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors } = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  return docInfo ? (
    <div>
      {/*------- Doctor Details--------- */}
      <div>
        <div>
          <img src={docInfo.image} alt="" />
        </div>
      
        <div>
           {/*-------- Doctor Information --------- */}
           <p></p>
        </div>
      </div>  
    </div>
  ) : null
}

export default Appointment