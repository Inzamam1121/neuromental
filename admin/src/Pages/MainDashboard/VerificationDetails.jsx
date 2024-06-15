import React from 'react'

import { CiMobile1 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";

const VerificationDetails = () => {
    return (
        <>
            <div className='w-[90%] m-auto bg-white rounded-xl font-pop'>
                <div className='font-pop flex flex-col gap-4 p-10'>
                    <img src="../../images/profile.png" alt="" className='w-fit' />
                    <div>
                        <h2>Liam Ridley</h2>
                        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <h6><CiMobile1 className='text-[#868686] text-2xl' /></h6>
                            <h6>(316) 555-0116</h6>
                        </div>
                        <div className='flex gap-4'>
                            <h6><MdOutlineEmail className='text-[#868686] text-2xl' /></h6>
                            <h6>liamridley@gmail.com</h6>
                        </div>
                    </div>
                    <h1 className='text-[#868686] text-xl'>Courses</h1>
                    <div className='flex gap-4'>
                        <li>Neuromental</li>
                        <li>Neuromental</li>
                    </div>
                </div>

            </div>
            <div className='w-[90%] m-auto'>
               <p className='my-4'>Residence Registration</p>
               <div>
                <div className='flex justify-between px-5 bg-white py-5 rounded-xl'>
                    <img src="" alt="" />
                    <div className='flex gap-5'>
                        <button>Preview</button>
                        <button >
                            <select name="" id="" className='bg-[#8686868C] rounded-xl text-white px-3 py-1'>
                                <option value="" selected>Issue</option>
                                <option value="">Issue</option>
                                <option value="">Issue</option>
                            </select>
                        </button>
                    </div>
                </div>
               </div>
            </div>
        </>
    );
}
export default VerificationDetails