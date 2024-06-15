import React from 'react'
import { MdOutlinePhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";


const ReportDetails = () => {
    
    return (
        <>
            <div className='w-[90%] m-auto border-4 border-[#AFBDC9] rounded-lg font-pop '>
                <div className='w-[100%] bg-[#ECEAEA] px-6 py-4 shadow-shadowheader mb-4'>Noman Mailk</div>
                <div className='flex flex-col lg:flex-row gap-8 px-4'>
                    <div className='flex flex-col gap-4'>
                        <img src="../../images/student.png" alt="" className='w-fit shadow-shadowimage rounded-lg' />
                        <div className='flex gap-4 items-center'>
                            <p><MdOutlinePhone className='text-[#7A7A7A] text-2xl' /></p>
                            <p>6479949992</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <p><IoMdMail className='text-[#7A7A7A] text-2xl' /></p>
                            <p>ututorpro@gmail.com</p>
                        </div>

                    </div>
                    <div>
                        <h1 className='border-b-2 py-2 border-[#C4C4C4] text-xl'>Personal Information</h1>
                        <div className='flex gap-4 pt-2'>
                            <p className='text-[#918EAF]'>Birth Date :</p>
                            <p className='text-[#7A7A7A]'>09 Jan 2004</p>
                        </div>
                        <div className='flex gap-4 pt-2'>
                            <p className='text-[#918EAF]'>Gender : </p>
                            <p className='text-[#7A7A7A]'>Female</p>
                        </div>
                        <div className='flex gap-1 pt-2'>
                            <p className='text-[#918EAF]'>Blood Group :</p>
                            <p className='text-[#7A7A7A]'>A+</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className='border-b-2 py-2 border-[#C4C4C4] text-xl'>Additional Details</h1>
                            <div className='flex gap-4 pt-2'>
                                <p className='text-[#918EAF]'>Father Name:</p>
                                <p className='text-[#7A7A7A]'></p>
                            </div>
                            <div className='flex gap-4 pt-2'>
                                <p className='text-[#918EAF]'>Mother Name:</p>
                                <p className='text-[#7A7A7A]'>Angela Wang</p>
                            </div>
                            <div className='flex gap-1 pt-2'>
                                <p className='text-[#918EAF]'>Parents email:</p>
                                <p className='text-[#7A7A7A]'>ututorpro@gmail.com</p>
                            </div>
                            <div className='flex gap-1 pt-2'>
                                <p className='text-[#918EAF]'>Parents Contact:</p>
                                <p className='text-[#7A7A7A]'>6479949992</p>
                            </div>
                            <div>
                                <h1 className='border-b-2 py-2 border-[#C4C4C4] text-xl'>Results</h1>
                                <div className='flex gap-4 pt-2'>
                                    <p className='text-[#918EAF]'>Exercise:</p>
                                    <p className='text-[#7A7A7A]'>40%</p>
                                </div>
                                <div className='flex gap-4 pt-2'>
                                    <p className='text-[#918EAF]'>Quizzes:</p>
                                    <p className='text-[#7A7A7A]'>30%</p>
                                </div>
                                <div className='flex gap-1 pt-2'>
                                    <p className='text-[#918EAF]'>Attendance:</p>
                                    <p className='text-[#7A7A7A]'>70%</p>
                                </div>
                                <div className='flex pt-2 gap-8'>
                                    <p className='text-[#918EAF]'>Videos:</p>
                                    <p className='text-[#7A7A7A]'>50%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-16'>
                        <div>
                            <h1 className='border-b-2 py-2 border-[#C4C4C4] text-xl'>Academic Details</h1>
                            <div className='flex gap-4 pt-2'>
                                <p className='text-[#918EAF]'>Admission No:</p>
                                <p className='text-[#7A7A7A]'>21001 View Enrollment</p>
                            </div>
                            <div className='flex gap-4 pt-2'>
                                <p className='text-[#918EAF]'>TC No :</p>
                                <p className='text-[#7A7A7A]'></p>
                            </div>

                        </div>
                        <div>
                        <h1 className='border-b-2 py-2 border-[#C4C4C4] text-xl'>Academic Details</h1>
                        <div className='flex gap-4 pt-2'>
                            <p className='text-[#918EAF]'>Result:</p>
                            <p className='text-[#7A7A7A]'>40%</p>
                        </div>
                        <h1 className='border-b-2 py-2 border-[#C4C4C4] text-xl'>Payment Status</h1>
                        <div className='flex gap-4 pt-2'>
                            <button className='bg-[#63D5773B] text-[#63D577] py-1 px-4 rounded-2xl'>Paid</button>
                        </div>
                        
                       
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ReportDetails