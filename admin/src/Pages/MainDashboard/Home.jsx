import React, { useState } from 'react'
import { PiStudentBold } from "react-icons/pi";
import { GrAnnounce } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";



const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleQuestionChange = (event, value) => {
    setQuestionNumber(value);
    setSelectedOption(null); // Reset selected option for new question
  };

  const radius = 50;  // Increased radius
  const strokeWidth = 10;  // Increased stroke width
  const circumference = 2 * Math.PI * radius;
  const progress = questionNumber * 12.5; // Adjusted for 8 questions
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getColorgray = () => {
    return questionNumber <= 4 ? 'text-[#737090]' : 'text-[#737090]';
  };
  const getColororange = () => {
    return questionNumber <= 4 ? 'text-[#D3D729]' : 'text-[#D3D729]';
  };
  const getColorgreen = () => {
    return questionNumber <= 4 ? 'text-[#8BCD00]' : 'text-[#8BCD00]';
  };
  const getColorred = () => {
    return questionNumber <= 4 ? 'text-[#D92550]' : 'text-[#D92550]';
  };

  return (
    <div>
      <div className='w-[90%] m-auto flex gap-4'>
        <div className='flex flex-col lg:flex-row items-center gap-9 bg-white w-full lg:w-[25%] py-5 px-4 m-auto border-b-8 border-[#9C9AA8] rounded-b-xl'>
          <div className='flex flex-col gap-4'>
            <h4 className='text-[#7C787840] text-lg w-max'>Current courses</h4>
            <p><PiStudentBold className='text-6xl text-[#9C9AA8]' /></p>
            <p className='text-[#9896A3] text-xl'>Students</p>
          </div>
          <div>
            <div className='flex flex-row w-full md:w-[70%] lg:w-[50%] items-center justify-center relative'>
              <svg className="transform -rotate-90">
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  className="text-gray-300"
                />
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className={getColorgray()}
                  style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                />
              </svg>
              <span className='absolute text-lg'>{progress}%</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-9 bg-white w-full lg:w-[25%] py-5 px-4 m-auto border-b-8 rounded-b-xl border-[#D3D729]'>
          <div className='flex flex-col gap-4'>
            <h4 className='text-[#7C787840] text-lg w-max'>Ongoing Courses</h4>
            <p><PiStudentBold className='text-6xl text-[#D3D729]' /></p>
            <p className='text-[#D3D729] text-lg'>17 courses</p>
          </div>
          <div>
            <div className='flex flex-row w-full md:w-[70%] lg:w-[50%] items-center justify-center relative'>
              <svg className="transform -rotate-90">
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  className="text-gray-300"
                />
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className={getColororange()}
                  style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                />
              </svg>
              <span className='absolute text-lg'>{progress}%</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-9 bg-white w-full lg:w-[25%] py-5 px-4 m-auto border-b-8 rounded-b-xl border-[#8BCD00]'>
          <div className='flex flex-col gap-4'>
            <h4 className='text-[#7C787840] text-lg w-max'>Scheduled</h4>
            <p><PiStudentBold className='text-6xl text-[#8BCD00]' /></p>
            <p className='text-[#8BCD00]'>Courses</p>
          </div>
          <div>
            <div className='flex flex-row w-full md:w-[70%] lg:w-[50%] items-center justify-center relative'>
              <svg className="transform -rotate-90">
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  className="text-gray-300"
                />
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className={getColorgreen()}
                  style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                />
              </svg>
              <span className='absolute text-lg'>{progress}%</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-9 bg-white w-full lg:w-[25%] py-5 px-4 m-auto border-b-8 rounded-b-xl border-[#D92550]'>
          <div className='flex flex-col gap-4'>
            <h4 className='text-[#7C787840] text-lg w-max'>Courses (Last week)</h4>
            <p><PiStudentBold className='text-6xl text-[#D92550]' /></p>
            <p className='text-[#D92550]'>New Registration</p>
          </div>
          <div>
            <div className='flex flex-row w-full md:w-[70%] lg:w-[50%] items-center justify-center relative'>
              <svg className="transform -rotate-90">
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  className="text-gray-300"
                />
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className={getColorred()}
                  style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                />
              </svg>
              <span className='absolute text-lg'>{progress}%</span>
            </div>
          </div>
        </div>

      </div>
      <div className='flex gap-48 w-[90%] m-auto mt-10'>
        <div className='flex flex-col'>
          <div className='flex gap-4 items-center'>
            <p><GrAnnounce className='text-[#9C9AA8] text-3xl' /></p>
            <p>Online Notice Board</p>
          </div>
          <div className='flex gap-12 bg-white p-5 w-[65%] rounded-xl mt-10'>
              <div className='flex flex-col gap-28 border-r-2 p-4 text-[#7A7A7A]'>
                <p>Admin</p>
                <p>Teacher</p>
                <p>Student</p>
                <p>Parents</p>
                <p>School</p>
              </div>
              <div>
                <div className='flex flex-col gap-4'>
                  <p className='text-[#285A87] text-xl'>Learning Portal</p>
                  <p>Welcome to Neuromental training Platform. </p>
                </div>
              </div>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <p><SlCalender className='text-[#9C9AA8] text-3xl' /></p>
          <p>Events and Class schedule</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
