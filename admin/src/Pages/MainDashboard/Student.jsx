import React from 'react'
import { RiFileSearchFill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom'



const Student = () => {
  const data = [
    { name: 'Aimee Liu', no: '21001' },
    { name: 'John Doe', no: '21002' },
    { name: 'Jane Smith', no: '21003' },
    { name: 'Mike Johnson', no: '21004' },
    { name: 'Emily Davis', no: '21005' },
  ];

  return (
    <div className='w-[90%] m-auto'>
      <div className='flex items-center gap-1 pb-5 font-pop'>
        <p className='text-[#918EAF] text-3xl'><RiFileSearchFill /></p>
        <p className='text-black text-xl'>All Students</p>
      </div>
      <div className='w-[90%] bg-white p-5'>
        <div className='border-b-2 border-[#C4C4C4] pb-2'>
          <h1 className='text-[#7A7A7A] text-xl'>Student</h1>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center px-5 mt-6'>
          <div className='flex gap-2 py-2 border-2 rounded-full w-full md:w-[30%] justify-between pr-8'>
            <input
              type="text"
              className='border-none outline-none ml-3 flex-grow'
              placeholder='Search by name'
            />
            <IoSearchSharp className='text-[#918EAF] text-2xl md:text-3xl' />
          </div>
          <div>
            <button className='bg-[#918EAF] text-white px-5 py-2 rounded-lg'>
             <Link to={'/Admin/student/managestudent'}> Manage Students</Link>
            </button>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col w-full mt-4'>
          <div className=' w-full lg:w-[35%]'>
            <div className='user-display-section max-h-[500px] overflow-y-auto'>
              {data.map((student, index) => (
                <div
                  key={index}
                  className='flex gap-6 items-center w-full border-4 border-[#918EAF96] shadow-shadowcart rounded-lg p-4 mb-4'
                >
                  <div className='w-[20%]'>
                    <img
                      src="../../images/student.png"
                      className='rounded-full'
                      alt={student.name}
                    />
                  </div>
                  <div className='flex flex-col gap-2 font-black text-sm'>
                    <p>{student.name}</p>
                    <p>Admission No : {student.no}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-fit lg:w-[80%] font-pop shadow-shadow1'>
            <div className='w-[90%] m-auto rounded border-4 border-[#918EAFB5]'>
              <div className='flex justify-between bg-[#ECEAEA] px-5 py-2 rounded-b'>
                <h1 className='text-xl text-black'>Aimee Liu</h1>
                <button className='px-5 py-2 bg-[#918EAF] text-white rounded-lg  font-pop'>View</button>
              </div>
              <div className='font-pop flex lg:flex-row md:flex-col flex-col'>
                <div className='flex flex-col gap-5 px-6 py-4'>
                  <img src="../../images/student.png" alt=""  className='rounded-xl'/>
                  <div className='flex gap-3'>
                    <p><FaPhone className='text-[#7A7A7A] text-2xl'/></p>
                    <p> 6479949992</p>
                  </div>
                  <div className='flex gap-3'>
                    <p><MdEmail className='text-[#7A7A7A] text-2xl'/></p>
                    <p>ututorpro@gmail.com</p>
                  </div>
                  <h1 className='text-xl font-bold'>Personality Test</h1>
                  <div className='flex gap-4 border-t-2 border-[#C4C4C4]'>
                    <p className='text-[#918EAF]'>Result:</p>
                    <p>50%</p>
                  </div>
                </div>
                <div className='flex flex-col gap-4 px-6 py-4 font-pop'>
                  <h2 className='text-lg border-b-2'>Personal Information</h2>
                  <div>
                     <div className='flex gap-4'>
                      <p className='text-[#918EAF]'>Birth Date :</p>
                      <p className='text-[#7A7A7A]'>09 Jan 2004</p>
                     </div>
                  </div>
                  <div>
                     <div className='flex gap-4'>
                      <p className='text-[#918EAF]'>Gender :</p>
                      <p className='text-[#7A7A7A]'>Female</p>
                     </div>
                  </div>
                  <div>
                     <div className='flex gap-1'>
                      <p className='text-[#918EAF]'>Blood Group :</p>
                      <p className='text-[#7A7A7A]'>A+</p>
                     </div>
                  </div>
                  <h2 className='text-lg border-b-2'>Additional Details</h2>
                  <div>
                     <div className='flex gap-4'>
                      <p className='text-[#918EAF]'>Father Name:</p>
                      <p className='text-[#7A7A7A]'></p>
                     </div>
                  </div>
                  <div>
                     <div className='flex gap-4'>
                      <p className='text-[#918EAF]'>Mother Name:</p>
                      <p className='text-[#7A7A7A]'> Angela Wang                      </p>
                     </div>
                  </div>
                  <div>
                     <div className='flex gap-1'>
                      <p className='text-[#918EAF]'>Parents email:</p>
                      <p className='text-[#7A7A7A]'>ututorpro@gmail.com</p>
                     </div>
                  </div>
                  <div>
                     <div className='flex gap-1'>
                      <p className='text-[#918EAF]'>Parents Contact:</p>
                      <p className='text-[#7A7A7A]'>6479949992</p>
                     </div>
                  </div>
                  <h2 className='text-lg border-b-2'>Academic Details</h2>
                  <div>
                     <div className='flex gap-4'>
                      <p className='text-[#918EAF]'>Admission No:</p>
                      <p className='text-[#7A7A7A]'>21001 View Enrollment</p>
                     </div>
                  </div>
                  <div>
                     <div className='flex gap-4'>
                      <p className='text-[#918EAF]'>TC No :</p>
                      <p className='text-[#7A7A7A]'>  </p>
                     </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
