import React from 'react'
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";



const InstallmentsDetails = () => {
    return (
        <>
            <div className='w-[90%] m-auto bg-white rounded-xl'>
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
            <div className='w-[90%] m-auto p-2'>
                <div className='flex items-center gap-4 px-4 py-3 bg-[#BCBACA] w-fit rounded-2xl'>
                    <p><FaPen className='text-white text-2xl' /></p>
                    <p className='font-pop text-white text-xl'>Installments</p>
                </div>
                <div className='w-full bg-white px-6 py-7 rounded-xl mt-4'>
                    <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                        <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                            <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content] '>First Installments </label>
                            <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadowheader rounded-lg' placeholder='Enter Fee' />
                        </div>
                        <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center ">
                            <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Till Date: </label>
                            <input type="date" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadowheader rounded-lg' placeholder='1-6-2024' />
                        </div>
                        <div className=" flex-col md:flex-row flex gap-4 md:items-center ">
                        <IoAddCircleSharp className='text-4xl text-[#BCBACA]'/>
                        </div>


                    </div>
                    </div>
                </div>
            </>
            );
}
            export default InstallmentsDetails