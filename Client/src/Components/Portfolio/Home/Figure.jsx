import React from "react";
import Button from "./Button";
const data = [
  {
    heading: "The transformative power of affirmations & afformations",
    img: "./Images/figuretwo.png",
  },
  {
    heading: "  Neuroplasticity: The power of thoughts over the brain",
    img: "./Images/figure.png",
  },
  {
    heading: " Breathing techniques for relaxation",
    img: "./Images/figurethree.png",
  },
];

const Figure = () => {
  return (
    <div>
      <div className="w-[90%]  gap-8 flex flex-col lg:flex-row m-auto justify-center ">
        {data.map((item, index) => (
          <div
            className={`flex  relative gap-6 flex-col ${
              index % 2 == 0 ? "lg:flex-col" : "lg:flex-col-reverse"
            } basis-[25%]`}
          >
            <div className="basis-[25%] relative  p-6 bg-[#EBEEF3] ">
              <p className="text-center font-pop font-semibold text-gradient">
                {item.heading}
              </p>
              <div className="btn absolute bottom-[-2%] flex left-[35%] lg:left-[30%]">
                <Button />
              </div>
            </div>

            <div className="basis-[75%]">
              <img src={item.img} alt="nothing" />
            </div>
          </div>
        ))}
        {/* <div className="flex  gap-10 mb-20 relative flex-col basis-[25%]">
        <div className="basis-[75%]">
            <img src="../Images/figure.png" alt="nothing"  />
          </div>
          <div className="basis-[25%]  p-6 bg-[#EBEEF3] ">
            <p className="text-center p-6 font-pop font-semibold text-gradient">
          Neuroplasticity: The power of thoughts over the brain
            </p>
          </div>
          <div className="btn  absolute  bottom-2  left-24">
          <Button/>
          </div>
          
        
        </div>
        <div className="flex  gap-6 relative flex-col basis-[25%]">
          <div className="basis-[25%]  p-6 bg-[#EBEEF3] ">
            <p className="text-center font-pop font-semibold text-gradient">
            Breathing techniques for relaxation
            </p>
          </div>
          <div className="btn absolute top-24  left-20">
          <Button/>
          </div>
          
          <div className="basis-[75%]">
            <img src="../Images/figurethree.png" alt="nothing"  />
          </div>
        </div> */}
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
