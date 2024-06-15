import React from 'react'
import { MdOutlineGroup } from "react-icons/md";
import StudentList from '../../Component/StudentList';
import AddTeacher from '../../Component/AddTeacher';
import { Link, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import TeacherList from '../../Component/TeacherList';
import AddTrainer from './AddTrainer';


const ManageTeacher = () => {
    const location = useLocation()
  return (
    <div className='w-[90%] m-auto bg-[#F5F5F5] rounded-xl  '>
        <div className='flex gap-3 items-center p-5 shadow-shadow1'>
            <p><MdOutlineGroup className='text-2xl'/></p>
            <p>Manage Students</p>
        </div>
       <div className='flex flex-col lg:flex-row gap-3 px-4'>
       <div className={`flex justify-end w-[50%]  px-4 py-4 rounded-tl-lg bg-purple-700 ${location.pathname=='Admin/teacher/manageteacher'?'bg-[#918EAF] text-white':'bg-white text-black'}`}>
          <Link to='/Admin/teacher/manageteacher' className='self-end'>  <p>View all Teacher</p></Link>
        </div>
        <div className={`w-[50%] flex items-end justify-end px-4 py-4 rounded-tr-lg ${location.pathname=='/Admin/teacher/manageteacher/addtrainer'?'bg-[#918EAF] text-white':'bg-white text-black'}`} >
            <p><Link to='/Admin/teacher/manageteacher/addtrainer'>Add Teacher</Link></p>
        </div>
       </div>
       <Routes>
            <Route path='/' element={<TeacherList/>}/>
            <Route path='/addtrainer' element={<AddTrainer/>}/>
       </Routes>
    </div>
  )
}

export default ManageTeacher