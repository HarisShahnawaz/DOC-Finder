import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form>

      <p>Add Doctor</p>

      <div>
        <div>
          <label htmlFor="doc-img">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type='file' id='doc-img' hidden />
          <p>Upload Doctor <br /> Picture</p>


        </div>


        <div>
          <div>
            <p>Doctor Name</p>
            <input type='text' placeholder='Name' required />
          </div>

          <div>
            <p>Doctor Email</p>
            <input type='text' placeholder='Doctor Email' required />
          </div>
        </div>

      </div>


    </form>
  )
}

export default AddDoctor