import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
   <footer className='w-full pt-16 pb-8 bg-gray-50 text-gray-600'>
     <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12'>
       
       <div className='col-span-1 lg:col-span-2'>
         <img src={logo} alt="Logo" className='h-10 mb-6' />
         <p className='leading-relaxed text-sm md:text-base pr-4 max-w-md'>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis id molestias laborum! Laborum, veritatis. Similique soluta optio inventore unde. Illo, itaque distinctio alias quisquam qui quasi sed, quo animi quaerat atque molestiae.
         </p>
       </div>
       
       <div>
         <h3 className='text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide'>Company</h3>
         <ul className='space-y-4 font-medium'>
           <li><Link to="/" className='hover:text-blue-600 transition-colors'>Home</Link></li>
           <li><Link to="/about" className='hover:text-blue-600 transition-colors'>About us</Link></li>
           <li><Link to="/contact" className='hover:text-blue-600 transition-colors'>Contact us</Link></li>
           <li><Link to="/privacy-policy" className='hover:text-blue-600 transition-colors'>Privacy Policy</Link></li>
         </ul>
       </div>
       
       <div>
         <h3 className='text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide'>Get In Touch</h3>
         <ul className='space-y-4 font-medium'>
           <li className='flex items-center gap-2'><span className='text-blue-600'>📞</span> +1-234-567-890</li>
           <li className='flex items-center gap-2'><span className='text-blue-600'>✉️</span> support@successign.com</li>
         </ul>
       </div>

     </div>
     
     <div className='max-w-7xl mx-auto px-6'>
       <hr className='border-gray-200 mb-6' />
       <p className='text-center text-sm font-medium'>
         Copyright © 2026 - All Rights Reserved.
       </p>
     </div>
   </footer>
  )
}

export default Footer
