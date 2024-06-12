import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { ImBooks } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import Stream from './Stream';
import ClassRoom from './ClassRoom';
import Upload from './Upload';



const MainCourse = () => {
    const location=useLocation();
    return (
        <div>
            {/* nav bar code start */}

            <ul className='flex  bg-white py-5 mb-9 font-pop text-lg'>
                <li className={`px-3 border-b-2  hover:border-mainpurple ${location.pathname=="/Student/course/stream"?"border-mainpurple":"border-transparent"}`}><Link to={'/Student/course/stream'}>Stream</Link></li>
                <li className={`px-3 border-b-2  hover:border-mainpurple ${location.pathname=="/Student/course/classroom"?"border-mainpurple":"border-transparent"}`}><Link to={'/Student/course/classroom'}>Classroom</Link></li>
            </ul>

            <div>
                <Routes>
                    <Route path="/stream" element={<Stream />} />
                    <Route path="/classroom" element={<ClassRoom />} />
                    <Route path="/classroom/upload" element={<Upload />} />
                </Routes>
            </div>
            {/* nav bar code End */}

        </div>
    )
}

export default MainCourse