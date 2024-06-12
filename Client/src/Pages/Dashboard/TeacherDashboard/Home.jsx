import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';

import { PiBooksFill } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Home = () => {
    const [seriesNb, setSeriesNb] = useState(2);
    const [itemNb, setItemNb] = useState(5);
    const [skipAnimation, setSkipAnimation] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);

    const handleItemNbChange = (event, newValue) => {
        if (typeof newValue !== 'number') {
            return;
        }
        setItemNb(newValue);
    };

    const handleSeriesNbChange = (event, newValue) => {
        if (typeof newValue !== 'number') {
            return;
        }
        setSeriesNb(newValue);
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleQuestionChange = (event, value) => {
        setQuestionNumber(value);
        setSelectedOption(null); // Reset selected option for new question
    };

    const radius = 25;  // Increased radius
    const strokeWidth = 5;  // Increased stroke width
    const circumference = 2 * Math.PI * radius;
    const progress = questionNumber * 12.5; // Adjusted for 8 questions
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const getColor = () => {
        return questionNumber <= 4 ? 'text-[#737090]' : 'text-[#737090]';
    };

    const data = [
        { class: 'Class A', register: 'Registered 78', progress: 50 },
        { class: 'Class B', register: 'Registered 45', progress: 75 },
        { class: 'Class C', register: 'Registered 60', progress: 85 },
        { class: 'Class D', register: 'Registered 30', progress: 65 },
        { class: 'Class E', register: 'Registered 70', progress: 40 },
        // Add more classes as needed
    ];

    const meetings = [
        { with: 'Meeting with VC', link: "www.zoom.com", time: '10 A.M - 11A.M', end: 'Due Soon' },
        { with: 'Team Sync-up', link: "www.teams.com", time: '2 P.M - 3 P.M', end: 'Due Tomorrow' },
        { with: 'Project Update', link: "www.google.com", time: '4 P.M - 5 P.M', end: 'Due Next Week' },
        // Add more meetings as needed
    ];

    const series = [
        {
            name: 'Series 1',
            data: [10, 20, 30, 40, 50],
        },
        {
            name: 'Series 2',
            data: [15, 25, 35, 45, 55],
        },
        // Add more series as needed
    ];
    const data1 = [
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
        <>
            <div className="font-pop w-[90%] mx-auto mt-8 max-w-fit flex bg-[#737090] px-6 items-center rounded-2xl gap-10">
                <div className='flex-1 w-[90%]'>
                    <h3 className='text-white font-semibold text-3xl'>Welcome back, Liam Ridley</h3>
                    <h4 className='text-white mt-2'>You have 27 new student added to your domain. Please reach out to the Head Teacher if you want them excluded from your domain.</h4>
                </div>
                <div className='basis-[30%]'>
                    <img src="../../Teacher/banner.png" alt="Banner" className='w-full h-fit' />
                </div>
            </div>
            <div className='w-[90%] mx-auto flex justify-between gap-4 mt-8'>
                <div className='basis-[33.33%] w-[100%] bg-white p-10 rounded-xl'>
                    <div className='flex justify-between items-center mb-6'>
                        <h1 className='font-pop text-2xl text-[#2E3A59]'>Student Statistic</h1>
                        <p>Sep 2022</p>
                    </div>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C', 'group D', 'group E'] }]}
                        series={[{ data: [10, 20, 30, 40, 50] }]}
                        // width={'100%'}
                        height={350}
                    />
                </div>
                <div className='bg-white w-fit basis-[30%] p-6 rounded-xl '>
                    <h3 className='text-black text-3xl font-semibold mb-6'>Class Progress</h3>
                    <div className="max-h-96 overflow-y-auto">
                        {data.slice(0, 4).map((item, index) => {
                            const itemCircumference = 2 * Math.PI * radius;
                            const itemStrokeDashoffset = itemCircumference - (item.progress / 100) * itemCircumference;

                            return (
                                <div key={index} className='flex items-center bg-[#F0F7FF] gap-7 font-pop p-4 justify-between mb-4 rounded-xl'>
                                    <div>
                                        <h2 className='text-2xl'>{item.class}</h2>
                                        <p className='text-[#9E9E9E]'>{item.register}</p>
                                    </div>
                                    <div className="relative">
                                        <svg className="transform -rotate-90 w-14 h-14">
                                            <circle
                                                cx="27"
                                                cy="27"
                                                r={radius}
                                                stroke="currentColor"
                                                strokeWidth={strokeWidth}
                                                fill="transparent"
                                                className="text-gray-300"
                                            />
                                            <circle
                                                cx="27"
                                                cy="27"
                                                r={radius}
                                                stroke="currentColor"
                                                strokeWidth={strokeWidth}
                                                fill="transparent"
                                                strokeDasharray={itemCircumference}
                                                strokeDashoffset={itemStrokeDashoffset}
                                                className={getColor()}
                                                style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                                            />
                                        </svg>
                                        <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-purple-600">
                                            {item.progress}%
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='bg-white w-fit basis-[35%] p-6 rounded-xl '>
                    <div className='flex justify-between items-center mb-6'>
                        <h3 className='text-black text-3xl font-semibold'>Upcoming Activities</h3>
                        <p className='text-[#737090] font-pop font-bold'>See All</p>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                        {meetings.map((meeting, index) => (
                            <div key={index} className='flex items-center gap-7 bg-[#F0F7FF] p-4 mb-4 rounded-xl'>
                                <div>
                                    <button className='bg-[#737090] text-white p-4 px-6 rounded-lg'>{index + 1}</button>
                                </div>
                                <div>
                                    <h2 className='text-xl font-semibold'>{meeting.with}</h2>
                                    <p className='text-[#737090] text-sm'>Meeting link: {meeting.link}</p>
                                </div>
                                <div>
                                    <li className='text-[#8A8A8A]'>{meeting.time}</li>
                                    <h6 className={`${meeting.end === 'Due Soon' ? 'text-[#FF1515]' : 'text-[#FF9924]'}`}>{meeting.end}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
                <div className='w-[90%] m-auto  flex flex-col gap-4 mt-9'>
                    <div className='bg-white rounded-xl'>
                <div className="topmain items-center" >
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
                    <div className='grid grid-cols-1 gap-x-6 md:grid-cols-2 2xl:grid-cols-3 w-[90%] m-auto rounded-2xl py-10'>
                        {data1.map((student, index) => (
                            <Link to={'/Teacher/subject/stream'}>
                                <div key={index} >
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
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
           
                </div>
            
        </>
    );
};

export default Home;
