import React from "react";

const Banner = () => {
  return (
    <>
      <div className="lg:flex bg-mainpurple justify-center relative">
        <div className="lg:basis-[50%] w-[100%] flex flex-col gap-6 justify-center items-start px-16 py-10 font-pop">
          <p className="font-bold text-white text-4xl xl:text-5xl capitalize leading-10 font-pop">From Brain Owner to Brain User</p>
          <p className="text-white capitalize font-pop text-2xl lg:w-[80%] w-[100%]">Neuromental training is the New Mental training.</p>
          <button className="py-2 px-4 font-semibold text-lg bg-[#FFFFFF] border-2 border-white text-[#8B668B] hover:bg-transparent hover:text-white rounded-full font-pop ease-in-out duration-300">
            Learn More
          </button>
        </div>
        <div className="lg:basis-[55%] overflow-hidden w-[100%] relative flex justify-center items-center">
          <div className="bg-white hidden lg:block absolute top-[30%] left-[15%] scale-y-[1.7] scale-x-[1.6] -rotate-[70deg] w-full h-full  z-10"></div>
          <img
            src="../Prop/HomeBGPr1.png"
            alt=""
            className="absolute z-30 w-[40%] bottom-[10%] left-[5%]"
          />
          <img
            src="../Prop/HomeBGPr2.png"
            alt=""
            className="absolute w-[40%] z-30 top-[10%] right-[5%]"
          />
          <img
            src="../Images/section.png"
            alt=""
            className="w-[50%] relative z-20  "
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
