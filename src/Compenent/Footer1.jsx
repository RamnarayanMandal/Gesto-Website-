import React from "react";


const Footer1 = () => {
  return (
    <div className=" h-full w-full  flex justify-center content-center items-center font-serif footer-bg">
      <div className="flex justify-center content-center items-center relative w-10/12">
        <div className="bg-img2">
          <div className="w-1/2 flex justify-start content-center items-center ">
            <img
              className="lg:absolute inset-x-0 bottom-0 md:hidden hidden lg:block "
              src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/n4-img-1.png"
              alt=""
            />
          </div>
          <div className="text-white">
            <h1 className="lg:text-5xl font-bold my-4 md:text-3xl text-xl ">
              Subscribe To Our <span className="underline">Newsletter!</span>
            </h1>
            <p className="lg:text-xl my-4 text-lg">
              We are 100+ professional software engineers with mor the 10 years
              in delive ring super products it because you've seen it.
            </p>
             <div className="lg:mt-10 lg:flex lg:justify-start gap-2 items-center content-center justify-center block">
                <input type="email" className="w-9/12 h-14 rounded-lg border-none p-4" placeholder="Your Email"/>
                <button className="btn">
                    Submit
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
