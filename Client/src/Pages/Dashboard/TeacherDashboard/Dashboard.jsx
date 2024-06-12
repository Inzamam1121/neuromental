import { Routes, Route } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAnalytics } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import Nav from './Nav';
import Home from './Home';
import { useState } from 'react';
import Profile from './Profile';
import Setting from './Setting';
import Mainsubject from './subject/Mainsubject';

const Dashboard = () => {
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
                    <div className="bg-[#E9E9E9] max-h-[100%] min-h-[100%] overflow-y-auto pb-20">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/profile' element={<Profile />} />
                            <Route path='/setting' element={<Setting />} />
                            <Route path='/subject/*' element={<Mainsubject />} />
                            
                        </Routes>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Dashboard