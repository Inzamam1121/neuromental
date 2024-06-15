import React from 'react'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const TeacherList=()=>{
    const data = [
        {
          profile: 'A',
          firstName: 'Aimee',
          lastName: 'Liu',
          admissionNo: '21001',
          teacherEmail: 'ututorpro@gmail.co',
          student: '6479949992',
        },
        {
          profile: 'A',
          firstName: 'Aimee',
          lastName: 'Liu',
          admissionNo: '21001',
          teacherEmail: 'ututorpro@gmail.co',
          student: '6479949992',
        },
        {
          profile: 'A',
          firstName: 'Aimee',
          lastName: 'Liu',
          admissionNo: '21001',
          teacherEmail: 'ututorpro@gmail.co',
          student: '6479949992',
        },
        {
          profile: 'A',
          firstName: 'Aimee',
          lastName: 'Liu',
          admissionNo: '21001',
          teacherEmail: 'ututorpro@gmail.co',
          student: '6479949992',
        },
        {
          profile: 'A',
          firstName: 'Aimee',
          lastName: 'Liu',
          admissionNo: '21001',
          teacherEmail: 'ututorpro@gmail.co',
          student: '6479949992',
        },
        {
          profile: 'A',
          firstName: 'Aimee',
          lastName: 'Liu',
          admissionNo: '21001',
          teacherEmail: 'ututorpro@gmail.co',
          student: '6479949992',
        },
        {
          profile: 'A',
          firstName: 'Aimee',
          lastName: 'Liu',
          admissionNo: '21001',
          teacherEmail: 'ututorpro@gmail.co',
          student: '6479949992',
        },
        {
          profile: 'A',
          firstName: 'Aimee',
          lastName: 'Liu',
          admissionNo: '21001',
          teacherEmail: 'ututorpro@gmail.co',
          student: '6479949992',
        },
        {
          profile: 'A',
          firstName: 'Aimee',
          lastName: 'Liu',
          admissionNo: '21001',
          teacherEmail: 'ututorpro@gmail.co',
          student: '6479949992',
        },
        {
          profile: 'A',
          firstName: 'Aimee',
          lastName: 'Liu',
          admissionNo: '21001',
          teacherEmail: 'ututorpro@gmail.co',
          student: '6479949992',
        },
        // ... (repeat similar objects for each row as needed)
      ];
      
    return(
        <>
        <div className='w-[90%] m-auto mt-6'>
            <div className='flex flex-col lg:flex-row gap-3 w-[100%]'>
                <div className='w-[50%] shadow-shadow1'>
                    <select name="" id="" className='bg-white px-20 py-4 rounded-xl w-[100%]'>
                        <option value="" selected>Default Academic Session</option>
                    </select>
                </div>
                <div className='w-[50%]'>
                    <select name="" id="" className='bg-white px-20 py-4 w-[100%] rounded-xl'>
                        <option value="">Select Class</option>
                    </select>
                </div>
            </div>
            <p className='py-3 text-[#285A87] text-xl'>Filter</p>
            <div className='w-[100%] m-auto'>
            <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-[#F0F0F0] text-sm text-[#7A7A7A]">
            <td className="py-2 px-4 border-b"><MdOutlineCheckBoxOutlineBlank/></td>
            <td className="py-2 px-4 border-b">Profile</td>
            <td className="py-2 px-4 border-b">First Name</td>
            <td className="py-2 px-4 border-b"></td>
            <td className="py-2 px-4 border-b">Admission No</td>
            <td className="py-2 px-4 border-b">Teacher Email</td>
            <td className="py-2 px-4 border-b">Student</td>
            <td className="py-2 px-4 border-b">Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white text-[#7A7A7A]' : 'bg-[#918EAF5C] text-[#7A7A7A]'}>
              <td className="py-2 px-4 border-b"><input type='checkbox'/></td>
              <td className="py-2 px-4 border-b">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                    {row.profile}
                  </div>
                </div>
              </td>
              <td className="py-1 px-4 border-b">{row.firstName}</td>
              <td className="py-1 px-4 border-b">{row.lastName}</td>
              <td className="py-1 px-4 border-b">{row.admissionNo}</td>
              <td className="py-1 px-4 border-b">{row.teacherEmail}</td>
              <td className="py-1 px-4 border-b">{row.student}</td>
              <td className="py-1 px-4 border-b">
                <div className="flex space-x-2">
                  <button><CiLock className="text-[#285A87] text-xl"/></button>
                  <button><FaEdit className="text-[#285A87] text-xl"/></button>
                <button><MdDeleteOutline className="text-[#285A87] text-xl"/></button>
                  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            </div>
        </div>
        </>
    );
}
export default TeacherList