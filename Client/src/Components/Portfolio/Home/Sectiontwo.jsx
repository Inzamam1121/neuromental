import React from "react";
import Button from "./Button";

const Sectiontwo = () => {
  return (
    // <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center w-[90%] m-auto border-2 border-[#AFAFAF] rounded-xl ">
        <div className="flex lg:justify-end   sm:m-auto sm:justify-center items-center">
          <img
            src="../Images/sectiontwo.png"
            alt="nothing"
            className=" lg:ml-auto ml-20"
            width={"60%"}
        
          />
        </div>
        <div className=" col-span-2 flex flex-col justify-center lg:items-start items-center gap-5">
          <div className="font-pop font-semibold text-lg">
            Meditation and neuroscience
          </div>
          <div className="w-[50%]">
            Learn more about meditation and neuroscience in this seminar.
            Practice meets theory.
          </div>
          <div className="mb-5 lg:mb-0">
            <Button />
          </div>
        </div>
      </div>

    // </div>
  );
};

export default Sectiontwo;
