import React from 'react';
import { PiBooksFill } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

const Home = () => {
    const data = [
        {
            name: 'Tom Hardly',
            diploma: 'Neuromental Trainer',
            instructor: 'Gerhard WAGNER',
            profileImg: "../../public/panel/profile.png",
            icon1: "../../public/panel/icon1.png",
            icon2: "../../public/panel/icon2.png"
        },
        {
            name: 'Tom Hardly',
            diploma: 'Neuromental Trainer',
            instructor: 'Gerhard WAGNER',
            profileImg: "../../public/panel/profile.png",
            icon1: "../../public/panel/icon1.png",
            icon2: "../../public/panel/icon2.png"
        },
        {
            name: 'Alice Johnson',
            diploma: 'Cognitive Behavioral Therapy',
            instructor: 'Jane DOE',
            profileImg: "../../public/panel/profile.png",
            icon1: "../../public/panel/icon1.png",
            icon2: "../../public/panel/icon2.png"
        },
        // Add more students as needed
    ];

    return (
        <div className='w-[90%] m-auto  flex flex-col gap-4'>
            <div className='bg-white rounded-xl'>
                <div className="topmain items-center">
                    <div className='flex justify-between items-center bg-[#737090] h-16 px-12 rounded-t-xl'>
                        <div className='flex gap-4'>
                            <div>
                                <p className='text-white font-ruda text-4xl'> <PiBooksFill /></p>
                            </div>
                            <div>
                                <h2 className='text-white font-bold font-ruda text-3xl'>My Courses</h2>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div>
                                <h2 className='text-white font-ruda text-4xl'><IoSearchOutline /></h2>
                            </div>
                            <div>
                                <h2 className='text-white font-ruda text-4xl'><FaAngleDown /></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="students">
                    <div className='grid grid-cols-1 gap-x-6 md:grid-cols-2 xl:grid-cols-3 w-[90%] m-auto rounded-2xl py-10'>
                        {data.map((student, index) => (
                            <div key={index}>
                                <div className='flex bg-[#868686] gap-10 px-8 rounded-t-2xl relative py-10'>
                                    <div className='gap-6 flex flex-col'>
                                        <h2 className='font-pop text-white text-2xl font-semibold '>{`Diploma in ${student.diploma}`}</h2>
                                        <p className='text-white font-pop text-sm font-bold'>{student.instructor}</p>
                                    </div>
                                    <div>
                                        <p className='text-white font-ruda text-7xl text-right'><PiBooksFill /></p>
                                    </div>
                                    <img src={student.profileImg} alt="Profile" className='absolute right-[10%] bottom-[-20%] w-[20%]' />
                                </div>
                                <div className="bg-white flex justify-end gap-2 mt-28">
                                    <img src={student.icon1} alt="Icon 1" />
                                    <img src={student.icon2} alt="Icon 2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-xl'>
                <div className="topmain items-center">
                    <div className='flex justify-between items-center bg-[#737090] h-16 px-12 rounded-t-xl'>
                        <div className='flex gap-4'>
                            <div>
                                <p className='text-white font-ruda text-4xl'> <PiBooksFill /></p>
                            </div>
                            <div>
                                <h2 className='text-white font-bold font-ruda text-3xl'>Past Courses</h2>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div>
                                <h2 className='text-white font-ruda text-4xl'><IoSearchOutline /></h2>
                            </div>
                            <div>
                                <h2 className='text-white font-ruda text-4xl'><FaAngleDown /></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="students">
                    
                </div>
            </div>
            
        </div>
    );
}

export default Home;
