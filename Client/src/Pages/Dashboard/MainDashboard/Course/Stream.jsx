import React from 'react'
import { ImBooks } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Stream = () => {
    return (
        <div>
            <div className='flex justify-between w-[90%] m-auto bg-[#7370907A] py-4 px-4 rounded-2xl'>
                <div className='flex flex-col gap-9'>
                    <h2 className='font-pop text-3xl font-semibold text-white'>Diploma in neuromental trainer</h2>
                    <p className='text-white font-pop text-lg'>Teachers ID</p>
                </div>
                <div>
                    <p className='text-9xl text-white'>
                        <ImBooks />

                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row w-[90%] m-auto py-5 space-x-3 ">
                {/* Sidebar */}
                <div className="bg-white  rounded-lg lg:basis-[30%] flex flex-col font-pop h-fit py-10 px-2">
                    <h2 className="font-semibold text-lg">Upcoming</h2>
                    <p className="mt-2 text-[#868686]">Wohooo! No work due</p>
                    <Link href="#" className="text-[#8E88B8] inline-block text-right">View All</Link>
                </div>

                {/* Main Content */}
                <div className="flex-1 space-y-3 sm:mt lg:space-y-3">
                    {/* Announcement */}
                    <div className="bg-white p-4 rounded-lg flex items-center shadow-sm space-x-3">
                        <div className="bg-green-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold mr-4">
                            L
                        </div>
                        <input
                            type="text"
                            placeholder="Announce something to your class"
                            className="flex-1 p-2 font-pop text-[#B7B7B7]"
                        />
                    </div>

                    {/* File Card */}
                    <div className="bg-white p-4 rounded-lg flex flex-col space-x-4 shadow-sm">
                        <div className="flex items-center">
                            <div className="bg-gray-400 text-white rounded-full lg:h-10 lg:w-10 flex items-center justify-center font-bold mr-4 lg:mr-4">
                                Dr
                            </div>
                            <p className=" font-pop text-[#B7B7B7]">
                                lorem lipsum is a dummy example which you want to get data as just dummy way.
                            </p>
                        </div>
                        <div className="flex items-center border rounded-lg p-4">
                            <img
                                src=""
                                alt="PDF"
                                className="w-16 h-20 object-cover mr-4"
                            />
                            <div>
                                <h3 className="font-semibold">lorem lipsum is a dummy</h3>
                                <p className="text-gray-500">PDF</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stream