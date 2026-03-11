import React from "react";
import about_img from "../assets/about_image.png";
const Aboutus = () => {
  return (
    <>
      <section className="w-full ">
        <div className="max-w-7xl mx-auto px-4 py-12 flex gap-10 ">
          <div>
            <img src={about_img} alt="photo" />
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos <br />
              consequuntur, dolor alias atque molestias labore neque ex facere <br />
              quo sunt reiciendis asperiores veniam libero aliquid inventore aut <br />
              commodi pariatur ipsum quas  <br /> nesciunt voluptatem. Mollitia eveniet
              explicabo molestias dolorum aliquam,  <br />soluta dolore incidunt
              reiciendis perferendis laboriosam, <br /> nihil sed at doloremque nemo
              debitis omnis quisquam provident, libero  <br />vitae illum veniam fuga
              beatae.  <br />Error nobis id laborum, earum sed numquam odio enim
              perferendis  <br />facere facilis maiores iusto reprehenderit, voluptatum
              assumenda recusandae  <br />beatae neque voluptatibus quis veniam hic
              
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 gap-0">
            <div className="grid grid-cols-3 border py-5 px-4 text-center">
                <div>
                    <h1>efficenct</h1>
                     <p> trail ecomended and remambair <br /> to help you stey in help</p>
                </div>
                 <div>
                    <h1>conrertion</h1>
                     <p> trail ecomended and remambair <br /> to help you stey in help</p>
                 </div>
                  <div>
                    <h1>something</h1>
                    <p> trail ecomended and remambair <br /> to help you stey in help</p>
                  </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
