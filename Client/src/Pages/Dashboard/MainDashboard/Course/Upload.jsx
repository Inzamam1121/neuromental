import React from 'react';
import { MdOutlineAssignment } from "react-icons/md";
import { FaGoogleDrive } from "react-icons/fa6";
import { MdLink } from "react-icons/md";

const Upload = () => {
    return (
        <div className="">
            <div className="flex gap-3 items-center font-pop text-[#8A85BE] w-[90%] m-auto mt-5">
                <p className="text-4xl"><MdOutlineAssignment /></p>
                <p className="text-2xl">Assignment</p>
            </div>
            <div className="w-[90%] m-auto flex flex-col-reverse lg:flex-row lg:justify-between mt-10 gap-5">
                <div className="lg:w-[70%]">
                    <div className="flex flex-col gap-3 text-[#8B8B8B] font-pop text-sm break-words">
                        <p>1. Assignment Phase 1</p>
                        <p>Please select at least 20 papers from year 2023 and extract the data based on your topics in Google sheet</p>
                        <div className="flex flex-col">
                            <p>https://docs.google.com/spreadsheets/d/1Q6qvHNXN5fqlePRiarKLt-dp3N30beyVwVIp7mmpJTo/edit#gid=0</p>
                            <p>1. Apply SLR or SMS process</p>
                            <p>2. Design the mixed Method Approach for your study (Diagram in Pdf)</p>
                            <p>3. Start a draft on latex and share the Latex link in Assignment Phase 1</p>
                        </div>
                        <p>Assignment phase 2</p>
                        <p>Report the related work. Related work must have one table that compares some good studies</p>
                        <p>Design the mixed Method Approach for your study (Diagram in Pdf)</p>
                        <p>3. Start a draft on latex and share the Latex link in Assignment Phase </p>
                    </div>
                </div>
                <div className="lg:w-[30%] bg-white rounded-lg shadow p-4">
                    <div className="flex justify-between font-pop text-black items-center">
                        <h2 className="font-semibold text-lg">Your Work</h2>
                        <span className="text-lg">Turned now</span>
                    </div>
                    <div className="border rounded-lg p-4 mt-4 flex justify-between items-center">
                        <div className="flex gap-4">
                            <label htmlFor="drive">
                                <input type="file" id='drive' className='opacity-0 hidden absolute' />
                                <div className="p-2 bg-gray-100 rounded-full">
                                    <FaGoogleDrive className="text-gray-600 text-2xl" />
                                </div>
                            </label>
                            <button className="p-2 bg-gray-100 rounded-full">
                                <MdLink className="text-gray-600" />
                            </button>
                        </div>
                        <span className="text-[#06050B] font-semibold">Upload Now</span>
                    </div>
                    <button className="w-full bg-[#737090] text-white rounded-lg py-2 mt-4">
                        Mark as done
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Upload;
