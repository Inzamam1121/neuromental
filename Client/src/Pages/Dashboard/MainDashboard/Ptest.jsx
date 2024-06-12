import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Ptest = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);

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

    return (
        <div className='p-10'>
            <div className='w-[90%] m-auto bg-white p-20 py-36 rounded-2xl'>
                <div className="flex flex-col md:flex-row sm:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        {/* <div className="relative w-24 h-24">  
                            <svg className="transform -rotate-90 w-24 h-24">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r={radius}
                                    stroke="currentColor"
                                    strokeWidth={strokeWidth}
                                    fill="transparent"
                                    className="text-gray-300"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r={radius}
                                    stroke="currentColor"
                                    strokeWidth={strokeWidth}
                                    fill="transparent"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={strokeDashoffset}
                                    className={getColor()}
                                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-purple-600">
                                {questionNumber}
                            </span>
                        </div> */}
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
                                    strokeDasharray={circumference}
                                    strokeDashoffset={strokeDashoffset}
                                    className={getColor()}
                                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-purple-600">
                                {questionNumber}
                            </span>
                        </div>
                    </div>
                    <button className="bg-[#BCBACA] text-white font-pop py-2 px-4 rounded-lg">
                        <Link to='/Student/ptest/progress'>Submit</Link>
                    </button>
                </div>
                <div className="mb-4 flex flex-col gap-4 mt-3">
                    <h2 className="text-2xl font-semibold font-pop">Question: {questionNumber}</h2>
                    <p className="text-gray-600 font-pop text-lg">
                        Lorem ipsum is a dummy text which is an example to show some dummy data in form.?
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 font-bold text-xl">
                    {['lorem lipsum', 'lorem lipsum', 'Lorem lipsum', 'lorem lipsum'].map((option, index) => (
                        <label
                            key={index}
                            className={`flex items-center p-4 rounded-3xl cursor-pointer ${selectedOption === option ? 'bg-purple-200' : 'bg-[#EBEBEB]'}`}
                            onClick={() => handleOptionChange(option)}
                        >
                            <input
                                type="radio"
                                name="option"
                                value={option}
                                className="form-radio text-purple-600 mr-2"
                                checked={selectedOption === option}
                                onChange={() => handleOptionChange(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <Stack spacing={2} className="flex justify-center mt-4 w-full items-center">
                    <Pagination
                        count={8}
                        page={questionNumber}
                        onChange={handleQuestionChange}
                        variant="outlined" shape="rounded"
                        // color="primary"
                        className='bg-[$737090]'
                    />
                </Stack>
            </div>
        </div>
    );
};

export default Ptest;
