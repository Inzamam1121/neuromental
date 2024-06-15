import React from "react";
import Button from "./Button";

const Cards = () => {
  return (
    <div className="my-20">
      <div className="py-12 text-center font-bold font-pop flex flex-col gap-4 text-3xl">
        <h2>PRESENCE | ONLINE | COMPACT</h2>
        <h2>Training · Further training · Workshops</h2>
      </div>
      <div className="w-[90%] rounded-2xl m-auto ">

        <div className=" flex lg:flex-row flex-col  justify-center  gap-4">
          <div className="lg:w-[55%] w-[100%] px-10 flex justify-center items-center  rounded-2xl border-2 border-[#AFAFAF]">
            <div className="flex gap-6">
              <div className="w-[40%]">
                <img
                  src="../Images/featureone.png"
                  alt="nothing"
                  className=""
                />
              </div>
              <div className="flex flex-col gap-4 justify-start items-start">
                <h2 className="font-pop font-bold text-lg mt-3">
                  Diploma in neuromental trainer
                </h2>
                <p className="font-pop">
                  From knowledge from brain research to personal experience and
                  competence.
                </p>
                <Button />
              </div>
            </div>
          </div>
          <div className="lg:w-[45%] w-full rounded-2xl py-6 px-10 relative border-2 border-[#AFAFAF]">
            <div className=" flex gpa-6">
              <img
                src="../Images/featuretwo.png"
                alt="nothing"
                className="h-[20%] w-[25%]"
              />
              <div className="flex font-pop items-center font-bold w-[40%]">
                Diploma in leadership trainer
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="font-pop w-full">
                Current results from brain research and neuromental, effective methods.
              </div>
              <Button />
            </div>
          </div>
        </div>

        <div className=" flex lg:flex-row flex-col my-6 gap-5">

          <div className="basis-[33.33%] p-4 rounded-2xl  border-2 border-[#AFAFAF]">
            <div className="flex  relative gap-4 mx-auto">
              <div className="w-[20%]">
                <img
                  src="../Images/card.png"
                  alt="nothing"
                  className="object-cover"
                />
              </div>
              <div className="flex text-left items-center font-bold left-28 w-[65%] ps-8 font-pop">
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
            </div>
          </div>

          <div className="basis-[33.33%] p-5 rounded-2xl  border-2 border-[#AFAFAF]">
            <div className="flex  relative gap-4 mx-auto  ">
              <div className="w-[20%] ">
                <img
                  src="../Images/cardtwo.png"
                  alt="nothing"
                  className="object-cover"
                />
              </div>
              <div className="flex text-left items-center font-pop font-bold left-28 w-[65%] ps-8">
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
            </div>
          </div>

          <div className="basis-[33.33%] p-3 rounded-2xl  border-2 border-[#AFAFAF]">
            <div className="flex relative gap-4 mx-auto ">
              <div className="w-[20%]">
                <img
                  src="../Images/cardthree.png"
                  alt="nothing"
                  className="object-cover"
                />
              </div>
              <div className="flex text-left items-center font-pop font-bold w-[65%] ps-8">
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
            </div>
          </div>

        </div>

        <div className="flex justify-center gap-10 items-center m-auto border-2 border-[#AFAFAF] rounded-xl ">
          <div className="">
            <img
              src="../Images/sectiontwo.png"
              alt="nothing"
              className=" lg:ml-auto ml-20"
              width={"60%"}

            />
          </div>
          <div className=" flex flex-col justify-center lg:items-start items-center gap-5">
            <h2 className="font-pop font-bold text-xl">Meditation and neuroscience</h2>
            <p className="text-lg max-w-lg">Learn more about meditation and neuroscience in this seminar. Practice meets theory.</p>
            <Button />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Cards;
