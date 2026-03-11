import React from 'react'
import appointmentimg from '../assets/appointment_img.png'

const Newslatter = () => {
  return (
   <>
   
    <section className=' w-full py-12 bg-blue-50'>
      <div className=' max-w-7xl mx-auto px-10 flex justify-between items-center gap-4'>

<div className="w-1/2">
<h1 className='text-2xl font bold  mb-3 rounded-b-3xl '>Book Appointment <br />
With 100+ trusted Do0cter</h1>
<button className='py-2 px-5 bg-amber-300'>create account</button>
</div>
<div className="w-1/2">
<img src={appointmentimg} alt="Appointment" className="w-80 h-80 object-cover" />
 </div>

</div>

      </section>
   </>
  )
}

export default Newslatter