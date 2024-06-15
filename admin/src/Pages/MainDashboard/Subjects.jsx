import React from 'react'
import { ImBooks } from "react-icons/im";
import { MdOutlineAssignment } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import { MdOutlineModeEdit, MdOutlineSocialDistance, MdOutlineAppRegistration } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbListDetails } from "react-icons/tb";
import { IoMdAddCircle } from "react-icons/io";



const Subjects = () => {
  return (
    <div className="w-[90%] m-auto">
    <div className="flex items-center justify-between text-white    mb-5">
        <div className='flex items-center bg-[#BCBACA] rounded-2xl w-fit px-4 py-2'>
        <MdOutlineModeEdit className='text-3xl' />
        <h2 className='text-xl ml-2'>Academic Details</h2>
        </div>
        <div>
          <IoMdAddCircle className='text-[#918EAF] text-5xl'/>
        </div>
    </div>
    <div className="bg-[#F4F4F4] p-4 py-5 rounded-lg mb-5">
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 py-7 md:items-center">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content] '>Course name<span className='text-red-600'>*</span></label>
                    <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Course name' />
                </div>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center ">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Course Trainer<span className='text-red-600'>*</span></label>
                    <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Course Trainer' />
                </div>


            </div>
            <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Start Date<span className='text-red-600'>*</span></label>
                    <input type="date" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Start Date' />
                </div>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>End Date<span className='text-red-600'>*</span></label>
                    <input type="date" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='End Date' />
                </div>


            </div>
            <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Time<span className='text-red-600'>*</span></label>
                    <input type="time" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Start Date' />
                </div>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Location<span className='text-red-600'>*</span></label>
                    <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='End Date' />
                </div>


            </div>
            <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Description<span className='text-red-600'>*</span></label>
                    <textarea type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Start Date' />
                </div>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Assign Teacher<span className='text-red-600'>*</span></label>
                    <select name="" id="" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg'>
                        <option value="select" disabled>Select Teacher</option>
                        <option value="male" >Dr Ahmed</option>
                        <option value="Female" >Asim</option>
                    </select>
                </div>


            </div>
            <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content] '>Course Link<span className='text-red-600'>*</span></label>
                    <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='//http:www.zoom.com' />
                </div>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center ">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>No Seats<span className='text-red-600'>*</span></label>
                    <input type="number" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='45' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Address<span className='text-red-600'>*</span></label>
                    <textarea type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Address' />
                </div>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Teacher Phone<span className='text-red-600'>*</span></label>
                    <input type="phone" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Phone' />
            
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content] '>Type<span className='text-red-600'>*</span></label>
                    <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Type' />
                </div>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center ">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Teacher Email<span className='text-red-600'>*</span></label>
                    <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Teacher Email' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content] '>Category<span className='text-red-600'>*</span></label>
                    <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Category' />
                </div>
                <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center ">
                    <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Schedule Overview<span className='text-red-600'>*</span></label>
                    <textarea type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Schedule Overview' />
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default Subjects