import React from "react";
import Button from "./Button";

const Sectiontwo = () => {
  return (
    // <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center w-[90%] m-auto border-2 border-[#AFAFAF] rounded-xl ">
        <div className="flex justify-end items-center">
          <img
            src="../Images/sectiontwo.png"
            alt="nothing"
            className="ml-auto"
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
          <div>
            <Button />
          </div>
        </div>
      </div>

    // </div>
  );
};

export default Sectiontwo;
