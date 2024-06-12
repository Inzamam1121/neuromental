import React, { useState } from 'react';

const ExamProgress = () => {
    const [progress, setProgress] = useState(50); // Set your initial progress value
    const radius = 120;
    const stroke = 30;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className='p-4 md:p-10 lg:p-20 font-pop'>
            <div className='w-full md:w-[80%] lg:w-[90%] m-auto bg-white p-6 md:p-10 lg:p-20 rounded-xl'>
                <div className='text-xl md:text-2xl lg:text-3xl font-bold'>
                    <h2>Score :</h2>
                </div>
                <div className='flex justify-center mt-4'>
                    <div className='flex flex-row w-full md:w-[70%] lg:w-[50%] items-center justify-center relative'>
                        <svg className='transform -rotate-90 w-72 h-72'>
                            <circle
                                cx='145'
                                cy='145'
                                r={radius}
                                stroke='currentColor'
                                strokeWidth={stroke}
                                fill='transparent'
                                className='text-gray-700'
                            />
                            <circle
                                cx='145'
                                cy='145'
                                r={radius}
                                stroke='currentColor'
                                strokeWidth={stroke}
                                fill='transparent'
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                className='text-blue-500'
                                style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                            />
                        </svg>
                        <span className='absolute text-5xl'>{progress}%</span>
                    </div>
                </div>
                <div className='text-xl md:text-2xl lg:text-3xl font-bold mt-10'>
                    <h2>Result :</h2>
                </div>
                <div className='flex justify-center mt-4'>
                    <div className='flex flex-col w-full md:w-[70%] lg:w-[50%] items-center justify-center'>
                        <p className={`w-fit px-8 py-8 md:px-12 md:py-12 text-center font-pop text-xl md:text-2xl lg:text-3xl font-bold ${progress >= 50 ? 'text-green-600' : 'text-red-500'}`}>
                            {progress >= 50 ? 'Pass' : 'Fail'}
                        </p>
                        {progress <= 40 && <button className='bg-[#BCBACA] px-8 py-4 md:px-16 md:py-4 font-bold text-lg md:text-xl rounded-xl text-white font-pop mt-4'>Request To Admin</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamProgress;
