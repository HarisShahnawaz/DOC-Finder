import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/*--------left side --------- */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-1/2 text-gray-600 leading-6'>Find and hire trusted, verified doctors near you — fast, simple, and hassle-free. Compare profiles, check credentials, and book with clear confidence. Your health, matched with the right care.</p>
                </div>
                {/*--------middle side --------- */}
                <div>
                    <p className='text-base font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2  text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                {/*--------right side --------- */}
                <div>
                    <p className='text-base font-medium mb-5'>Get in Touch</p>
                    <ul className='flex flex-col gap-2  text-gray-600' >
                        <li>+92 03131435116</li>
                        <li>harisshahnawaz97@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/*--------last section */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2026@ Doc-Finder - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
//test