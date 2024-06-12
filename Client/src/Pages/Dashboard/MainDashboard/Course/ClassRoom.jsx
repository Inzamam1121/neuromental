import React from 'react';
import { ImBooks } from "react-icons/im";
import { MdOutlineAssignment } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const ClassRoom = () => {
  return (
    <div className='gap-2'>
      <div className='flex justify-between w-[90%] m-auto bg-[#7370907A] py-4 px-4 rounded-2xl'>
        <div className='flex flex-col gap-9'>
          <h2 className='font-pop text-3xl font-semibold text-white'>Diploma in neuromental trainer</h2>
          <p className='text-white font-pop text-lg'>Teachers ID</p>
        </div>
        <div>
          <p className='text-9xl text-white'>
            <ImBooks />
          </p>
        </div>
      </div>

      <div className='flex items-center w-[90%] m-auto py-4 gap-3 font-pop text-[#C7641F]'>
        <p className='text-4xl'>
          <ImBooks />
        </p>
        <p className=' font-pop text-lg font-bold'>View your Work</p>
      </div>

      <div className='w-[90%] m-auto bg-white rounded-xl'>
        <div className='flex justify-between items-center bg-[#737090] py-4 rounded-xl px-5'>
          <div className='flex items-center gap-2'>
            <p className='text-4xl text-white'><MdOutlineAssignment /></p>
            <h2 className='text-2xl text-white'>Assignment</h2>
          </div>
          <div>
            <p className='text-4xl text-white'><FaAngleDown /></p>
          </div>
        </div>
        <div className='px-6 py-2'>
          <div className='flex flex-col gap-3 text-[#8B8B8B] font-pop text-sm break-words'>
            <p>1. Assignment Phase 1</p>
            <p>Please select at least 20 papers from year 2023 and extract the data based on your topics in Google sheet</p>
            <div className='flex flex-col'>
              <p>https://docs.google.com/spreadsheets/d/1Q6qvHNXN5fqlePRiarKLt-dp3N30beyVwVIp7mmpJTo/edit#gid=0</p>
              <p>1. Apply SLR or SMS process</p>
              <p>2. Design the mixed Method Approach for your study (Diagram in Pdf)</p>
              <p>3. Start a draft on latex and share the Latex link in Assignment Phase 1</p>
            </div>
            <p>Assignment phase 2</p>
            <p>Report the related work. Related work must have one table that compares some good studies</p>
            <div>
                <Link to='/Student/course/classroom/upload' className='font-pop text-[#C7641F] text-lg'>View Instructions</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[90%] m-auto bg-white rounded-xl mt-4'>
        <div className='flex justify-between items-center bg-[#737090] py-4 rounded-xl px-5'>
          <div className='flex items-center gap-2'>
            <p className='text-4xl text-white'><MdOutlineAssignment /></p>
            <h2 className='text-2xl text-white'>Assignment</h2>
          </div>
          <div>
            <p className='text-4xl text-white'><FaAngleDown /></p>
          </div>
        </div>
       
      </div>
        
    </div>
  );
}

export default ClassRoom;
