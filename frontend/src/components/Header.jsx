import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap  bg-primary px-6 md:px-10 lg:px-20 rounded-lg'>
        {/*--------left side --------- */}
       <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p>
            Book Appointments <br /> With Trusted Doctors.
        </p>
        <div>
            <img src={assets.group_profiles} alt="" />
            <p>Simply browse through our extensive list of trusted doctors, <br />  schedule your appointments with ease.</p>
        </div>
        <a href="">
            Book Appointment <img src={assets.arrow_icon} alt="" />
        </a>
       </div>

         {/*--------right side --------- */}
         <div>
          <img src={assets.header_img} alt="" />
         </div>

    </div>
  )
}

export default Header