import React from 'react'
import headerimg  from '../assets/header_img.png'
import groupprofile from '../assets/group_profiles.png'
import arrowicon from '../assets/arrow_icon.svg'

const Hero = () => {
  return (
    <div>
      <section className='w-full h-90'>
        <div className='  flex justify-around items-center max-w-7xl  bg-amber-200 mx-auto px-10 gap-1'>

            <div className="left  space-y-6">
                <h1 className='text-4xl font-bold text-white mx-auto mt-35'>Book Apointment <br /> with trusted Docters </h1>
               <div className='flex justify-around mt-10'>
                 <img src={groupprofile} alt="" /> 
                 <p>simple browse thouhj  our extensi list  of trusted docters  <br /> shedule your our appoinmmtnt</p>
               </div>
               <button className='flex px-6 py-2 rounded-5xl my-10 bg-white'>book appontemnt <img src={arrowicon} alt="" /></button>
            </div>
            <div className="right">
                <img src={headerimg} alt=""   className='h-80'/> </div>
            </div>
            </section>  
    </div>
  )
}

export default Hero