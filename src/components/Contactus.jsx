import React from 'react'
import contactimg from '../assets/contact_image.png'

const Contactus = () => {
  return (
    <section className="w-full py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Contact Us</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24 bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl border border-gray-100">
          
          <div className="flex-1 w-full flex justify-center md:justify-end order-2 md:order-1">
            <img 
              src={contactimg} 
              alt="Contact us" 
              className="w-full max-w-sm lg:max-w-md rounded-2xl shadow-md hover:scale-105 transition-transform duration-500 object-cover" 
            />
          </div>

          <div className="flex-1 space-y-8 order-1 md:order-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Office</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                54709 Willms Station <br />
                Suite 350, Washington, USA
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Details</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                <span className="font-semibold text-gray-800">Tel:</span> (415) 555-0132 <br />
                <span className="font-semibold text-gray-800">Email:</span> greatstackdev@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Careers at PRESCRIPTO</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Learn more about our teams and job openings.
              </p>
              <button className="px-10 py-3.5 bg-transparent border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                Explore Jobs
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contactus
