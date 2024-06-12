import React,{useState} from 'react';

const Status = () => {
    const [progress, setProgress] = useState(50); // Set your initial progress value
    const radius = 120;
    const stroke = 30;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    return (
        <div className='p-20'>
            <div className='w-[90%] m-auto bg-white p-20 py-32 rounded-xl'>
                <div className='text-3xl font-bold'>
                    <h2>Score :</h2>
                </div>
                <div className='flex justify-center'>
                    <div className='flex flex-row w-[50%] items-center justify-center'> 
                    {/* Start */}
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
                    {/* Start */}
                     </div>
                </div>
                <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-pop text-2xl font-semibold'>Deficiency:</h2>
                    <p className='font-pop text-lg'>Lorem lipsum is a dummy text which is an example to show some dumfmy data in form.?</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-pop text-2xl font-semibold'>Improvement:</h2>
                    <p className='font-pop text-lg'>Lorem lipsum is a dummy text which is an example to show some dumfmy data in form.?</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Status;
