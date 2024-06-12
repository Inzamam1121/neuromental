import React from "react";
import Button from "./Button";

const Cards = () => {
  return (
    <div>
      <div className="w-[90%] rounded-2xl m-auto ">
        <div className=" flex lg:flex-row flex-col  justify-center  gap-4">
          <div className="lg:w-[55%] w-[100%] rounded-2xl border-2 border-[#AFAFAF]">
            <div className="flex">
              <div className="ml-9">
                <img
                  src="../Images/featureone.png"
                  alt="nothing"
                  className="w-[60%] h-[70%]"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="font-pop font-semibold mt-3 w-[60%] pt-6">
                  Diploma in neuromental trainer
                </div>
                <div className="py-2 font-pop pe-3 w-[70%]">
                  From knowledge from brain research to personal experience and
                  competence.
                </div>
                <div className="lg:mb-0 mb-4 mt-6">
                  <Button />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[45%] w-full rounded-2xl relative border-2 border-[#AFAFAF]">
  <div className="p-5">
    <img
      src="../Images/featuretwo.png"
      alt="nothing"
      className="h-[20%] w-[25%]"
    />
    <div className="flex flex-col w-full">
      <div className="py-3 font-pop w-full">
      Current results from brain research and neuromental, effective methods.
      </div>
      <Button />
    </div>
  </div>
  <div className="flex font-pop items-center absolute top-6 left-40 font-semibold w-[40%]">
    Diploma in leadership
    <br /> trainer
  </div>
</div>

          {/* <div className="lg:w-[45%] w-[100%] rounded-2xl relative border-2 border-[#AFAFAF]">
            <div className="h-[50%] w-[50%] p-5">
              <img
                src="../Images/featuretwo.png"
                alt="nothing"
                className="h-[80%] w-[80%]"
              />
              <div className="flex flex-col">
                <div className="py-3 font-pop w-[100%]">
                  Current results from brain research and neuromental
                </div>
                  <Button />
              </div>
            </div>
            <div className="flex font-pop items-center absolute  top-6  left-48 font-semibold w-[40%] ">
              Diploma in leadership
              <br /> trainer
            </div>
          </div> */}
        </div>
        <div className=" flex lg:flex-row flex-col my-6 gap-5">
          <div className="basis-[33.33%] p-4 rounded-2xl  border-2 border-[#AFAFAF]">
            {/* <div className=" lg:ml-10 sm:ml-80 p-4 rounded-xl  border-2 border-[#AFAFAF]"> */}
              <div className="flex justify-center relative gap-10 mx-auto">
                <div className="h-[100%] w-[100%]">
                  <img
                    src="../Images/card.png"
                    alt="nothing"
                    className="h-[30%] w-[30%]"
                  />
                </div>
                <div className="flex text-left items-center absolute top-4 font-semibold left-28 w-[65%] ps-8 font-pop">
                  EPT Practitioner - Tapping technique
                </div>
              </div>
              <div>
                <div className="font-pop">
                  With this method you will learn to dissolve emotional and
                  mental blockages in a very lasting way.
                </div>
                <div className="py-5">
                  <Button />
                </div>
              {/* </div> */}
            </div>
          </div>
          <div className="basis-[33.33%] p-5 rounded-2xl  border-2 border-[#AFAFAF]">
            {/* <div className="p-5 rounded-xl  border-2 border-[#AFAFAF]"> */}
              <div className="flex justify-center relative gap-10 mx-auto  ">
                <div className="h-[100%] w-[100%] ">
                  <img
                    src="../Images/cardtwo.png"
                    alt="nothing"
                    className="h-[30%] w-[30%] "
                  />
                </div>
                <div className="flex text-left items-center font-pop absolute top-4 font-semibold left-28 w-[65%] ps-8">
                  Cert. Sports neuromental trainer
                </div>
              </div>
              <div>
                <div className=" font-pop">
                  Talent alone is not enough. Mental strength is the biggest
                  success factor in top-class sport.
                </div>
                <div className="pt-7">
                  <Button />
                </div>
              {/* </div> */}
            </div>
          </div>
          <div className="basis-[33.33%] p-3 rounded-2xl  border-2 border-[#AFAFAF]">
            {/* <div className="p-3 rounded-xl  border-2 border-[#AFAFAF]"> */}
              <div className="flex justify-center relative gap-10 mx-auto ">
                <div className="h-[100%] w-[100%]">
                  <img
                    src="../Images/cardthree.png"
                    alt="nothing"
                    className="h-[30%] w-[30%]"
                  />
                </div>
                <div className="flex text-left items-center absolute font-pop top-4 font-semibold left-28 w-[65%] ps-8">
                  Cert. Children's neuromental trainer
                </div>
              </div>
              <div>
                <div className="font-pop">
                  Empower children for their lives. Master life playfully with
                  mental training.
                </div>
                <div className="py-5">
                  <Button />
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-6 ml-6 items-center justify-center">
          <div className=" lg:ml-10 sm:ml-80 p-4 rounded-xl  border-2 border-[#AFAFAF]">
            <div className="flex justify-center relative gap-10 mx-auto">
              <div className="h-[100%] w-[100%]">
                <img
                  src="../Images/card.png"
                  alt="nothing"
                  className="h-[30%] w-[30%]"
                />
              </div>
              <div className="flex text-left items-center absolute top-4 font-semibold left-28 w-[50%] ps-8 font-pop">
                EPT Practitioner - Tapping technique
              </div>
            </div>
            <div>
              <div className="w-[70%] font-pop">
                With this method you will learn to dissolve emotional and mental
                blockages in a very lasting way.
              </div>
              <div className="py-5">
                <Button />
              </div>
            </div>
          </div>
          <div className="p-5 rounded-xl  border-2 border-[#AFAFAF]">
            <div className="flex justify-center relative gap-10 mx-auto  ">
              <div className="h-[100%] w-[100%] ">
                <img
                  src="../Images/cardtwo.png"
                  alt="nothing"
                  className="h-[30%] w-[30%] "
                />
              </div>
              <div className="flex text-left items-center font-pop absolute top-4 font-semibold left-28 w-[50%] ps-8">
                Cert. Sports neuromental trainer
              </div>
            </div>
            <div>
              <div className="w-[70%] font-pop">
                Talent alone is not enough. Mental strength is the biggest
                success factor in top-class sport.
              </div>
              <div className="py-5">
                <Button />
              </div>
            </div>
          </div>
          <div className="p-3 rounded-xl  border-2 border-[#AFAFAF]">
            <div className="flex justify-center relative gap-10 mx-auto ">
              <div className="h-[100%] w-[100%]">
                <img
                  src="../Images/cardthree.png"
                  alt="nothing"
                  className="h-[30%] w-[30%]"
                />
              </div>
              <div className="flex text-left items-center absolute font-pop top-4 font-semibold left-28 w-[50%] ps-8">
                Cert. Children's neuromental trainer
              </div>
            </div>
            <div>
              <div className="w-[70%] font-pop">
                Empower children for their lives. Master life playfully with
                mental training.
              </div>
              <div className="py-5">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Cards;
