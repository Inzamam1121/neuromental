import React from "react";
import Button from "./Button";

const Figure = () => {
  return (
    <div>
      <div className="w-[90%] m-auto">
        <div className="flex flex-col">
          <div className="basis-[25%]  p-6 bg-[#EBEEF3] ">
            <p className="text-center">
              The transformative power of affirmations & afformations
            </p>
          </div>
          <div className="basis-[75%]">
            <img src="../Images/figuretwo.png" alt="nothing" className="" />
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto">
      <div className="w-[80%] m-auto">

      </div>
    </div> */}
      {/* <div className="container mx-auto">
        <div className="grid grid-cols-3 justify-center gap-6 items-center">
          <div className="bg-[#EBEEF3] mb-28">
            <p className="text-center flex text-gradient5 justify-center items-center font-pop lg:p-4 p-0">
              The transformative power
              <br /> of affirmations & <br />
              afformations
            </p>
            <div className="flex justify-center btn">
              <Button />
            </div>
          </div>
          <div className="lg:mt-10 mt-0 lg:mb-0">
            <img
              src="../Images/figure.png"
              alt="nothing"
              className="w-[80%] h-[100%]"
            />
          </div>
          <div className="bg-[#EBEEF3] mb-44 mr-28">
            <p className="text-center flex text-gradient5 justify-center items-center lg:p-4 p-0">
              Breathing techniques for <br />
              relaxation
            </p>
            <div className="flex justify-center btn">
              <Button />
            </div>
          </div>
          <div>
            <img
              src="../Images/figuretwo.png"
              alt="nothing"
              className="w-[60%] h-[70%] img"
            />
          </div>
          <div className="bg-[#EBEEF3] mb-20">
            <p className="text-center flex justify-center items-center lg:p-20 p-0">
              Neuroplasticity: The power
              <br /> of thoughts over <br />
              the brain
            </p>
            <div className="flex justify-center btn">
              <Button />
            </div>
          </div>
          <div>
            <img
              src="../Images/figurethree.png"
              alt="nothing"
              className="w-[60%] h-[100%] img"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Figure;
