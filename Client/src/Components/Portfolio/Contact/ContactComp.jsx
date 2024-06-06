import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const ContactComp = () => {
    return (
        <div className='w-[95%] md:w-[90%] lg:w-[80%] bg-white m-auto flex flex-col lg:flex-row justify-center relative min-h-[100vh] my-20 shadow-shadow rounded-3xl'>
            <div className='absolute h-[100%] w-[100%] lg:w-[30%] top-0 bottom-0 bg-gradient3 right-0 z-10 rounded-3xl lg:rounded-r-3xl rounded-b-3xl lg:rounded-b-none'></div>
            <div className="bg-transparent flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 relative z-20 py-10 px-5 lg:px-20">
                <div className='lg:basis-[60%] flex flex-col items-center lg:items-start'>
                    <div className='flex flex-col gap-4 w-full'>
                        <div className="heading text-2xl lg:text-black text-white font-semibold lg:text-6xl font-pop text-center lg:text-left">
                            <h2>Get in <span className='text-white lg:text-[#8B668B]'>Touch</span></h2>
                        </div>
                        <div className="description font-Head text-center lg:text-left text-white lg:text-black">
                            <p>If you have any questions about our training offerings or would like to speak to us personally, please feel free to contact us. We are happy to answer your questions.</p>
                            <h6 className='mt-2 lg:mt-0'>Your team at the ACADEMY FOR NEUROMENTAL TRAINING</h6>
                        </div>
                        <div className="form w-full">
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name *"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone number *"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Book your appointment"
                                        className="w-full p-3 border border-gray-300 rounded-md"
                                    />
                                    <button className="absolute right-3 top-3 text-gray-400">
                                        {/* You can place an icon here if needed */}
                                    </button>
                                </div>
                                <button type="submit" className="w-full bg-[#8B668B] text-white p-3 rounded-md hover:bg-purple-700">BOOK NOW</button>
                            </form>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-10 lg:gap-40 font-pop py-10 mt-auto w-full justify-between lg:justify-start'>
                        <div className='flex items-center gap-2 lg:text-black text-white'>
                            <div>
                                <p className='text-3xl mt-2 text-white'><IoCall /></p>
                            </div>
                            <div>
                                <h5>Phone</h5>
                                <p>+43 664 8167555</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 lg:text-black text-white'>
                            <div>
                                <p className='text-3xl mt-2'><MdOutlineEmail /></p>
                            </div>
                            <div>
                                <p>Email</p>
                                <h6>office@neuromentaltraining.com</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:basis-[40%] hidden lg:block'>
                    <img src="../Images/user.png" alt="" className='w-full h-full object-cover rounded-r-3xl' />
                </div>
            </div>
        </div>
    );
}

export default ContactComp;
