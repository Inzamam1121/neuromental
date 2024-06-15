import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAnalytics } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Nav from '../../Component/Nav';
import { FaChevronDown } from "react-icons/fa";

import Home from './Home'
import Student from './Student'
import Teacher from './Teacher'
import ManageStudent from './ManageStudent';
import Subjects from './Subjects';
import Setting from './Setting';
import ManageTeacher from './ManageTeacher';
import Report from './Report';
import ReportDetails from './ReportDetails';
import RequestedStudents from './RequestedStudents'
import Installments from './Installments';
import InstallmentsDetails from './InstallmentsDetails';
import Verification from './Verification';
import VerificationDetails from './VerificationDetails';


const Admin = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div className="flex flex-row min-h-[100vh] max-h-[100vh]">
                <div
                    className={`lg:basis-[30%] xl:basis-[15%] z-50 absolute lg:relative w-[80%] md:w-[55%]  h-[100%] ${isMenuOpen && "hidden"
                        }  lg:block lg:w-auto bg-white`}
                    style={{ overflow: "unset" }}
                >
                    <Nav
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        toggleMenu={toggleMenu}
                    />
                </div>
                <div className="basis-[100%] lg:basis-[68%] xl:basis-[85%] w-[100%] relative h-[100vh] max-h-[100vh] overflow-hidden">
                    <div className="bg-white font-bold py-4 px-6 flex justify-between">
                        <div className="block lg:hidden" onClick={toggleMenu}>
                            <TiThMenu className="mt-2 text-xl" />
                        </div>
                        <div className="font-pop text-2xl">Home</div>
                        <div className="flex items-center gap-5">
                            <img
                                src="../../panel/user.png"
                                alt="nothing"
                                className="w-[40px] h-[40px]"
                            />
                            <p className="flex items-center font-pop">
                                Liam Ridley{" "}
                                <span className=" ml-1">
                                    {" "}
                                    <FaChevronDown />{" "}
                                </span>{" "}
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#E9E9E9] max-h-[100%] min-h-[100%] overflow-y-auto pb-20 pt-10">
                        <Routes>
                            <Route path='/' element={<Home />}/>
                            <Route path='/student' element={<Student />}/>
                            <Route path='/student/managestudent/*' element={<ManageStudent />}/>
                            <Route path='/teacher' element={<Teacher />}/>
                            <Route path='/teacher/manageteacher/*' element={<ManageTeacher />}/>

                            <Route path='/subjects' element={<Subjects />}/>
                            <Route path='/setting' element={<Setting />}/>
                            <Route path='/report/*' element={<Report />}/>
                            <Route path='/report/reportdetails' element={<ReportDetails />}/>
                            <Route path='/requestedstudents' element={<RequestedStudents />}/>
                            <Route path='/installments' element={<Installments />}/>
                            <Route path='/installments/installmentsdetails' element={<InstallmentsDetails />}/>
                            <Route path='/verification' element={<Verification />}/>
                            <Route path='/verification/verificationdetails' element={<VerificationDetails />}/>
                           
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin