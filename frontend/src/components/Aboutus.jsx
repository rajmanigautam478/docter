import React from "react";
import about_img from "../assets/about_image.png";

const Aboutus = () => {
  return (
    <section className="w-full py-16 bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 w-full flex justify-center">
          <img 
            src={about_img} 
            alt="About us" 
            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-500" 
          />
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            consequuntur, dolor alias atque molestias labore neque ex facere
            quo sunt reiciendis asperiores veniam libero aliquid inventore aut
            commodi pariatur ipsum quas nesciunt voluptatem. Mollitia eveniet
            explicabo molestias dolorum aliquam, soluta dolore incidunt
            reiciendis perferendis laboriosam, nihil sed at doloremque nemo
            debitis omnis quisquam provident, libero vitae illum veniam fuga
            beatae.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg text-justify">
            Error nobis id laborum, earum sed numquam odio enim
            perferendis facere facilis maiores iusto reprehenderit, voluptatum
            assumenda recusandae beatae neque voluptatibus quis veniam hic.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 mt-4">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 mt-10">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
           <p className="text-gray-500 mt-3">Delivering excellence in healthcare services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-10 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">Efficiency</h3>
                <p className="text-gray-600 leading-relaxed">Tailored recommendations to help you stay in top health with our efficient booking system.</p>
            </div>
             <div className="bg-gray-50 p-10 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">Convenience</h3>
                <p className="text-gray-600 leading-relaxed">Access top-tier healthcare professionals from the comfort of your home.</p>
             </div>
              <div className="bg-gray-50 p-10 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">Personalization</h3>
                <p className="text-gray-600 leading-relaxed">Get personalized care plans designed specifically for your health needs.</p>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;