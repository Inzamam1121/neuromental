import React from "react";

const Banner = () => {
  return (
    <>
      <div className="md:flex justify-center relative">
        <div className="lg:w-[50%] w-[100%] flex flex-col justify-center items-start px-16 bg-[#6c276c] font-pop">
          <p className="font-semibold text-white  w-88 text-3xl capitalize w-[50%] leading-8 font-pop">
            From Brain Owner to Brain User
          </p>
          <p className="text-white capitalize font-pop py-5 text-2xl w-[80%]">
            Neuromental training is the New Mental training.
          </p>
          <div>
            <button
              className=" ps-5 pe-5 md:mb-0 mb-4
 bg-[#FFFFFF] text-[#8B668B] rounded-full p-1 font-pop"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-[50%] w-[100%] flex justify-center items-center relative">
          <img src="../Images/section.png" alt="nothing" className="lg:w-[50%] w-[100%]  " />
          {/* <p className="bg-white h-20  w-25 rounded-lg p-4">Our competences for your success.</p> */}
          {/* <div className="absolute">
          <img src="../Images/Img.png" alt="nothing"
          />
          </div> */}
        
        </div>
  
      </div>
      <div className="text-center font-pop  py-20 text-3xl font
      -semibold flex justify-center items-center">
      What speaks for training at the Academy for<br/> Neuromental Training®
      </div>
    </>
  );
};

export default Banner;
