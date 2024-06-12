import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";



const SignUp = () => {
    const image = "url(../../public/images/bgimage.png)"
    return (
        <div className='bg-mainpurple h-full relative'>
            <div className='absolute top-0 bottom-0 h-full left-0 z-10'>
                <img src="../../Images/bgimage.png" alt="" className='w-full h-full' />
            </div>
            <div className="relative z-20 flex w-[80%] m-auto items-center justify-between">
                <div className="form mt-10 basis-[30%] lg:basis-[40%]">
                    <div className="relative">

                        <div className="bg-white bg-opacity-30 rounded-3xl p-10 shadow-lg w-full text-center md:mb-10 sm:mb-10">
                            <form className="login-form">
                                <img src="../../Images/image.png" alt="" />
                                <div>

                                <h2 className="text-2xl font-semibold font-pop text-white text-left mb-4">Sign up</h2>
                                </div>
                                <div className='font-pop text-white'>
                                    <p className='text-left text-sm mb-2'>Let’s get you all st up so you can access your personal account.</p>
                                </div>
                                <div className="text-left mb-4">
                                    <div className='lg:flex gap-3'>
                                        <div className='basis-[50%]'>
                                            <label className="block mb-2 text-white text-lg font-pop font-semibold">First Name</label>
                                            <input type="email" placeholder="First Name" className="w-full p-2 border-none  rounded-lg font-pop text-lg" />

                                        </div>
                                        <div className='basis-[50%]'>

                                            <label className="block mb-2 text-white text-lg font-pop font-semibold">Last Name</label>
                                            <input type="email" placeholder="First Name" className="w-full p-2 border-none  rounded-lg font-pop text-lg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-left mb-4 lg:flex gap-3 ">
                                    <div className='basis-[50%]'>

                                        <label className="block mb-2 text-white text-lg font-pop font-semibold">Email</label>
                                        <input type="email" placeholder="Email" className="w-full p-2 rounded-lg font-pop text-lg" />
                                    </div>
                                    <div className='basis-[50%]'>

                                        <label className="block mb-2 text-white text-lg font-pop font-semibold">Phone</label>
                                        <input type="phone" placeholder="Phone" className="w-full p-2 rounded-lg font-pop text-lg" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>

                                            <label className="block mb-2 text-white text-left text-lg font-pop font-semibold">Password</label>
                                            <input type="password" placeholder="Password" className="w-full p-2 rounded-lg font-pop text-lg" />
                                        </div>
                                        <div>

                                            <label className="block mb-2 text-white text-lg text-left font-pop font-semibold">Password</label>
                                            <input type="password" placeholder="Password" className="w-full p-2 rounded-lg font-pop text-lg" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start font-pop text-white gap-4 mt-3'>
                                    <div className='flex flex-row gap-2 mr-2'>
                                        <input type="checkbox" name="" id="check" />
                                        <label htmlFor="check " className='font-pop text-white'>I agree to all the <span className='text-[#74718E]'>Terms</span> and <span className='text-[#74718E]'>Privacy Policies</span></label>
                                    </div>
                                    <div className='flex flex-row gap-2 mb-3'>
                                        <input type="checkbox" name="" id="check2" className='text-white text-left'/>
                                        <label htmlFor="check2">other certain documents</label>
                                    </div>
                                </div>
                                <button type="submit" className="bg-[#8B668B] text-white rounded py-2 w-full mb-4">Create Account</button>
                                <p className="mb-4 font-pop text-white text-md">Already Have Acount ?<span className='text-[#74718E]'>Login</span></p>
                                <div className='mb-4'>
                                    <div className='border-red-600'>
                                        
                                    </div>
                                    <div>
                                        <p className='font-pop text-white'>or Signup with</p>
                                    </div>
                                    <div></div>
                                </div>
                                <div className="flex justify-around mb-4 flex-row gap-1">
                                    <button type="button" className="bg-transparent rounded-md border  px-24 py-3 text-red-600"><FaGoogle /></button>
                                    <button type="button" className="bg-transparent border rounded-md px-24 py-3 text-blue-600"><FaFacebook /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="pic basis-[30%] mt-28 lg:block hidden">
                    <img src="../../public/Images/bgimage2.png" alt="" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default SignUp