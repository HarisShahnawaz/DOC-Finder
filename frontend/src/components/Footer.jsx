import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Footer = () => {
  return (
    <div>
        <div>
               {/*--------left side --------- */}
                <div>
                  <img src={assets.logo} alt="" />
                  <p>Find and hire trusted, verified doctors near you — fast and hassle-free. Your health, matched with the right care.</p>
                </div>
                {/*--------middle side --------- */}
                <div>
                    <p>COMPANY</p>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                {/*--------right side --------- */}
                <div>
                    <p>Get in Touch</p>
                    <ul>
                        <li>+92 3131435116</li>
                        <li>harisshahnawaz97@gmail.com</li>
                    </ul>
                </div>
        </div>
         {/*--------last section --------- */}
        <div>
           <hr />
           <p>Copyright 2026@ Doc-Finder - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer