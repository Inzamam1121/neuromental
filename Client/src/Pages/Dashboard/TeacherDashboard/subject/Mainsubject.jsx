import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Classroom from './Classroom'
import Stream from './Stream'
import Student from './Student'

const Mainsubject = () => {

    const  location = useLocation()

    return (
        <div>
            {/* nav bar code start */}

            <ul className='flex  bg-white py-5 mb-9 font-pop text-lg'>
                <li className={`px-3 border-b-2  hover:border-mainpurple ${location.pathname=="/Teacher/subject/stream"?"border-mainpurple":"border-transparent"}`}><Link to={'/Teacher/subject/stream'}>Stream</Link></li>
                <li className='px-3 border-b-2 border-transparent hover:border-mainpurple'><Link to={'/Teacher/subject/classroom'}>Classroom</Link></li>
                <li className='px-3 border-b-2 border-transparent hover:border-mainpurple'><Link to={'/Teacher/subject/student'}>Student</Link></li>
            </ul>

            <div>
                <Routes>
                    <Route path='/stream' element={<Stream/>}/>
                    <Route path='/classroom' element={<Classroom/>}/>
                    <Route path='/student' element={<Student/>}/>
                </Routes>
            </div>
            {/* nav bar code End */}

        </div>
    )
}

export default Mainsubject