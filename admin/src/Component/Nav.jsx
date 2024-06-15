import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAnalytics } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { GrClose } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';
import { PiExamFill } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { VscReport } from "react-icons/vsc";
import { CiSquareQuestion } from "react-icons/ci";
import { VscServerProcess } from "react-icons/vsc";







const Nav = ({ isMenuOpen, setIsMenuOpen, toggleMenu }) => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const data = [
        {
            name: "Home",
            Icon: IoMdHome,
            link: '/Admin/'

        },
        {
            name: "Student",
            Icon: CgProfile,
            link: '/Admin/student'

        },
        {
            name: "Teacher",
            Icon: FaChalkboardTeacher,
            link: '/Admin/teacher'

        },
        {
            name: "Courses",
            Icon: GiDiploma,
            link: '/Admin/subjects'

        },
        {
            name: "Setting",
            Icon: FaPerson,
            link: '/Admin/setting'

        },
        {
            name: "Report",
            Icon: VscReport,
            link: '/Admin/report'

        },
        {
            name: "RequestedStudents",
            Icon: CiSquareQuestion,
            link: '/Admin/requestedstudents'

        },
        {
            name: "Installments",
            Icon: VscServerProcess,
            link: '/Admin/installments'

        },
        {
            name: "Verification",
            Icon: VscServerProcess,
            link: '/Admin/verification'

        },

    ]

    const location = useLocation()

    return (

        <div className={`md:flex flex-col relative  top-0 left-0 min-h-[100vh]`} style={{ overflow: "unset" }}>
            <div className="flex-col absolute z-50 top-[3%] right-[-20%] md:mt-0 lg:hidden">
                <button
                    type="button"
                    className="p-2 text-black text-4xl md:text-5xl focus:outline-none lg:hidden "
                    onClick={() => { setIsMenuOpen(!isMenuOpen); }}
                >
                    <GrClose />
                </button>
            </div>
            <div className="flex basis-[15%] py-10 h-[20%] items-center justify-center pr-2  bg-white border-slate-700 px-4">
                <img
                    src='../../public/panel/Logo.png'
                    alt="User avatar"
                    className="w-full  bg-white h-[100%]"
                />
            </div>
            <ul className="pb-4">
                {data.map((item, index) => (
                    <Link key={index} to={item.link}>
                        <li
                            className={`
        px-4 md:px-6 py-4 cursor-pointer font-medium text-black text-base border-l-4
        // ${location.pathname === item.link && 'bg-[#7370907A] text-[white]'} 
        ${location.pathname !== item.link ? 'hover:text-white hover:border-mainpurple hover:bg-[#7370907A] ' : 'text-white border-mainpurple bg-[#7370907A]'}
        ease-in-out duration-300`
                            }
                        >
                            <div className="flex flex-row gap-4 items-center text-2xl font-pop">
                                <item.Icon />
                                {item.name}
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>

        </div>
    )
}

export default Nav