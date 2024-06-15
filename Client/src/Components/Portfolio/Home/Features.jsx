import React from "react";
import Button from "./Button";

const Features = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-8">
          <div className="flex justify-center items-center p-3 rounded-xl  border-2 border-[#AFAFAF] ">
            <div className=" ml-9 ">
              <img
                src="../Images/featureone.png"
                alt="nothing"
                className="w-[60%] h-[70%]"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="font-pop font-semibold mt-3 w-[60%]">
                Diploma in neuromental trainer
              </div>
              <div className="py-5 w-[60%]">
                From knowledge from brain research to personal experience and
                competence.
              </div>
              <div>
                <Button />
              </div>
            </div>
          </div>
          <div>
            <div className="flex relative p-3 rounded-xl  border-2 border-[#AFAFAF]">
              <div className="h-[50%] w-[50%]">
                <img
                  src="../Images/featuretwo.png"
                  alt="nothing"
                  className="h-[40%] w-[40%]"
                />
                <div className="flex flex-col">
                  <div className="py-3">
                    Current results from brain research and neuromental,
                    effective methods.
                  </div>
                  <div>
                    <Button />
                  </div>
                </div>
              </div>
              <div className="flex font-pop items-center absolute top-10 font-semibold w-[40%] left-36">
                Diploma in leadership
                <br /> trainer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
