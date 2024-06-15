import React from 'react';
import { BiEdit } from "react-icons/bi";
import { MdOutlineModeEdit, MdOutlineSocialDistance, MdOutlineAppRegistration } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbListDetails } from "react-icons/tb";
import { IoMdAddCircle } from "react-icons/io";
const AddTrainer=()=>{
    return(
        <>
           <div className='w-[100%] m-auto flex flex-col items-center justify-center'>
      <div className='flex flex-col lg:flex-row w-[95%]  gap-6 mt-4'>
        <div className='basis-[22%]'>
          <select name="" id="" className='px-10 py-3 w-full text-[#7A7A7A] shadow-shadowcart rounded-lg'>
            <option value="" className='text-sm'>Default Academic Session</option>
          </select>
        </div>
        <div className='basis-[22%]'>
          <select name="" id="" className='px-10 py-3 w-full text-[#7A7A7A] shadow-shadowcart rounded-lg'>
            <option value="" className='text-sm'>Select Class</option>
          </select>
        </div>
        <div className='basis-[22%]'>
          <select name="" id="" className='px-10 py-3 w-full text-[#7A7A7A] shadow-shadowcart rounded-lg'>
            <option value="" className='text-sm'>Select Sections</option>
          </select>
        </div>
        <div className='basis-[22%]'>
          <select name="" id="" className='px-10 py-3 w-full text-[#7A7A7A] shadow-shadowcart rounded-lg'>
            <option value="" className='text-sm'>Select Subjects</option>
          </select>
        </div>
        <div className='flex justify-center items-center text-[#918EAF] text-4xl'>
          <IoMdAddCircle/>
        </div>
      </div>
   
      <div className="w-[95%] mt-7 m-auto flex flex-col lg:flex-row bg-white rounded-3xl">
            <div className="w-full lg:w-1/5 flex flex-col gap-4 p-4 bg-gray-50 rounded-xl">
                <div className='flex justify-between items-center'>
                    <p className='text-[#7A7A7A] font-pop'>Edit Image</p>
                    <label htmlFor="drive">
                        <input type="file" id='drive' className='hidden' />
                        <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
                            <BiEdit className="text-blue-800 text-2xl" />
                        </div>
                    </label>
                </div>
                <img src="../../../images/student.png" alt="Profile" className="w-full h-auto rounded-lg" />
                <div className='flex gap-2 items-center text-[#7A7A7A]'>
                    <MdOutlineModeEdit className='text-3xl' />
                    <p className=''>Academic details</p>
                </div>
                <div className='flex gap-2 items-center text-[#7A7A7A]'>
                    <CgProfile className='text-3xl' />
                    <p className=''>Personal Information</p>
                </div>
                <div className='flex gap-2 items-center text-[#7A7A7A]'>
                    <TbListDetails className='text-3xl' />
                    <p className=''>Additional Details</p>
                </div>
                <div className='flex gap-2 items-center text-[#7A7A7A]'>
                    <MdOutlineSocialDistance className='text-3xl' />
                    <p className=''>Skills & Social Details</p>
                </div>
            </div>
            <div className="w-full lg:w-4/5 p-4">
                <div className="flex items-center text-white bg-[#BCBACA] w-fit px-4 py-2 rounded-2xl mb-5">
                    <MdOutlineModeEdit className='text-3xl' />
                    <h2 className='text-xl ml-2'>Academic Details</h2>
                </div>
                <div className="bg-[#F4F4F4] p-4 rounded-lg mb-5">
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content] '>First name <span className='text-red-600'>*</span></label>
                                <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='First Name' />
                            </div>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center ">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Last name <span className='text-red-600'>*</span></label>
                                <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Last Name' />
                            </div>


                        </div>
                        <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>First name <span className='text-red-600'>*</span></label>
                                <textarea type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='First Name' />
                            </div>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Admission <span className='text-red-600'>*</span></label>
                                <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='First Name' />
                            </div>


                        </div>

                    </div>
                </div>
                <div className="flex items-center text-white bg-[#BCBACA] w-fit px-4 py-2 rounded-2xl mb-5">
                    <CgProfile className='text-3xl' />
                    <h2 className='text-xl ml-2'>Personal Details</h2>
                </div>
                <div className="bg-[#F4F4F4] p-4 rounded-lg mb-5">
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Email<span className='text-red-600'>*</span></label>
                                <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Email' />
                            </div>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>D.O.B <span className='text-red-600'>*</span></label>
                                <input type="date" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='First Name' />
                            </div>


                        </div>
                        <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center ">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Gender<span className='text-red-600'>*</span></label>
                                <select name="" id="" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg'>
                                    <option value="select" selected disabled>Select Gender</option>
                                    <option value="male" selected disabled>Male</option>
                                    <option value="Female" selected disabled>Female</option>
                                </select>
                            </div>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Student Contact <span className='text-red-600'>*</span></label>
                                <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Student Contact' />
                            </div>


                        </div>

                    </div>
                </div>
                <div className="flex items-center text-white bg-[#BCBACA] w-fit px-4 py-2 rounded-2xl mb-5">
                    <MdOutlineModeEdit className='text-3xl' />
                    <h2 className='text-xl ml-2'>Adational Details</h2>
                </div>
                <div className="bg-[#F4F4F4] p-4 rounded-lg mb-5">
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                            <div className="basis-[50%] flex-col md:flex-row flex  md:items-center">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Father name <span className='text-red-600'>*</span></label>
                                <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Father Name' />
                            </div>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>State <span className='text-red-600'>*</span></label>
                                <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='State' />
                            </div>


                        </div>
                        <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Country<span className='text-red-600'>*</span></label>
                                <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Country' />
                            </div>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>ZIP Code<span className='text-red-600'>*</span></label>
                                <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='ZIP Code' />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>Parent Contact<span className='text-red-600'>*</span></label>
                                <input type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='Country' />
                            </div>
                            <div className="basis-[50%] flex-col md:flex-row flex gap-4 md:items-center">
                                <label htmlFor="fname" className='text-[#7A7A7A] font-pop w-full max-w-[fit-content]'>State<span className='text-red-600'>*</span></label>
                                <textarea type="text" id="fname" className='text-[#7A7A7A] w-full py-3 px-4 shadow-shadow1 rounded-lg' placeholder='ZIP Code' />
                            </div>
                        </div>
                            <div className='flex justify-end items-end'>
                              <button className='bg-[#918EAF] px-6 py-1 text-white rounded-lg'>Add +</button>
                            </div>

                    </div>
                </div>
               
                
               
                
            
            </div>
       
      </div>
    </div>
        </>
    );
}
export default AddTrainer