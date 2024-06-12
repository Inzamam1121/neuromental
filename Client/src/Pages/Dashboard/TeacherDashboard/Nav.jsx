import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAnalytics } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { GrClose } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';
import { CiSettings } from "react-icons/ci";

const Nav = ({ isMenuOpen, setIsMenuOpen, toggleMenu }) => {
    const location = useLocation();
    const data = [
        {
            name: "Home",
            Icon: IoMdHome,
            link: '/Teacher/'
        },
        {
            name: "Profile",
            Icon: CgProfile,
            link: '/Teacher/profile'
        },
        {
            name: "Setting",
            Icon: CiSettings,
            link: '/Teacher/setting'
        },
    ];

    return (
        <div className={`md:flex flex-col relative top-0 left-0 min-h-[100vh]`} style={{ overflow: "unset" }}>
            <div className="flex-col absolute z-50 top-[3%] right-[-20%] md:mt-0 lg:hidden">
                <button
                    type="button"
                    className="p-2 text-black text-4xl md:text-5xl focus:outline-none lg:hidden "
                    onClick={() => { setIsMenuOpen(!isMenuOpen); }}
                >
                    <GrClose />
                </button>
            </div>
            <div className="flex basis-[15%] py-10 h-[20%] items-center justify-center pr-2 bg-white border-slate-700 px-4">
                <img
                    src='../../public/panel/Logo.png'
                    alt="User avatar"
                    className="w-full bg-white h-[100%]"
                />
            </div>
            <ul className="pb-4">
                {data.map((item, index) => (
                    <Link key={index} to={item.link}>
                        <li
                            className={`
                                px-4 md:px-6 py-4 cursor-pointer font-medium text-base border-l-4
                                ${location.pathname === item.link ? 'bg-[#7370907A] text-white border-mainpurple' : 'text-black border-transparent hover:text-white hover:bg-purple-200 hover:border-mainpurple'}
                                ease-in-out duration-300
                            `}
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
    );
};

export default Nav;
