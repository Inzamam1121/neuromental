import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAnalytics } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Dashboard from './Dashboard';


const Student = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
       <div className='bg-[#EAEAEA]'>
       <Dashboard/>
       </div>
    )
}

export default Student