import React from 'react'

import { BiEdit } from "react-icons/bi";
import { MdOutlineModeEdit, MdOutlineSocialDistance, MdOutlineAppRegistration } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbListDetails } from "react-icons/tb";

const Setting = () => {
    return (
        <div className="w-[80%] m-auto flex flex-col lg:flex-row bg-white mt-10">
        <div className="w-full  p-8 rounded-xl">
            <div className="flex items-center text-white bg-[#BCBACA] w-fit px-4 py-2 rounded-2xl mb-5">
                <MdOutlineModeEdit className='text-3xl' />
                <h2 className='text-xl ml-2'>Update Password</h2>
            </div>
            <div className="bg-[#F4F4F4] p-4 rounded-lg mb-5">
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                        <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                            <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content] '>Old Password <span className='text-red-600'>*</span></label>
                            <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Old Password' />
                        </div>
                        <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center ">
                            <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>New Password<span className='text-red-600'>*</span></label>
                            <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='New Password' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                        <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                            <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Confirm Password <span className='text-red-600'>*</span></label>
                            <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Confirm Password' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center text-white bg-[#BCBACA] w-fit px-4 py-2 rounded-2xl mb-5">
                <CgProfile className='text-3xl' />
                <h2 className='text-xl ml-2'>Update Email</h2>
            </div>
            <div className="bg-[#F4F4F4] p-4 rounded-lg mb-5">
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                        <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                            <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Old Email<span className='text-red-600'>*</span></label>
                            <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Old Email' />
                        </div>
                        <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                            <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>New Email<span className='text-red-600'>*</span></label>
                            <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='New Email' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                        <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                            <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Confirm Email <span className='text-red-600'>*</span></label>
                            <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Confirm Email' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
    )
}

export default Setting