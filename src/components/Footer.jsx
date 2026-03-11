import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
const Footer = () => {
  return (
   <>
    <section className=' w-full py-12 bg-gray-50'>
      <div className=' max-w-7xl mx-auto px-4 mt-4 grid grid-cols-3 gap 8'>
<div>
    <img src={logo} alt="" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis id molestias laborum! Laborum, veritatis. Similique <br />
    soluta optio inventore unde. Illo, itaque distinctio alias quisquam qui quasi sed, quo animi <br />
    quaerat atque molestiae, facilis laborum corporis enim autem architecto facere expedita incidunt provident  <br />nihil eligendi aut illum! aborio</p>
   </div>
   <div >
    <ul>COMPANY</ul>


    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About us</Link></li>
    <li><Link to="/contact">Contact us</Link></li>
    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
    </div>
   <div>
    <ul className=''>
        Get In Touch
    </ul>
    <li>9580186352</li>
    <li>successign.com</li>
   </div>
   <hr className='w-full' />
   <div>
    <p className='text-center'>Copy right All right resered</p>
   </div>


         
      </div>
      </section>
   </>
  )
}
export default Footer