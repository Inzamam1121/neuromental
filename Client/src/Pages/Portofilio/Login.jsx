import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";



const Login = () => {
    const image = "url(../../public/images/bgimage.png)"
    return (
        <div className='bg-mainpurple h-screen w-screen relative'>
            <div className='absolute top-0 bottom-0 h-full left-0 z-10'>
                <img src="../../Images/bgimage.png" alt="" className='w-full h-full' />
            </div>
            <div className="relative z-20 flex w-[80%] m-auto items-center justify-between">
                <div className="form mt-28 basis-[30%] lg:basis-[30%]">
                    <div className="relative">

                        <div className="bg-white bg-opacity-30 rounded-3xl p-10 shadow-lg w-full text-center">
                            <form className="login-form">
                                <img src="../../Images/image.png" alt="" />
                                <h2 className="text-2xl font-semibold font-pop text-white text-left mb-4">Login</h2>
                                <div className="text-left mb-4">
                                    <label className="block mb-2 text-white text-lg font-pop font-semibold">Email</label>
                                    <input type="email" placeholder="username@gmail.com" className="w-full p-2 border-none  rounded-lg font-pop text-lg" />
                                </div>
                                <div className="text-left mb-4">
                                    <label className="block mb-2 text-white text-lg font-pop font-semibold">Password</label>
                                    <input type="password" placeholder="Password" className="w-full p-2 rounded-lg font-pop text-lg" />
                                </div>
                                <a href="#" className="block text-left mb-4 text-white font-pop font-semibold">Forgot Password?</a>
                                <button type="submit" className="bg-[#8B668B] text-white rounded py-2 w-full mb-4">Sign in</button>
                                <p className="mb-4">or continue with</p>
                                <div className="flex justify-around mb-4">
                                    <button type="button" className="bg-white border rounded-full px-10 text-red-600"><FaGoogle /></button>
                                    <button type="button" className="bg-white border rounded-full px-10 py-3 text-blue-600"><FaFacebook /></button>
                                </div>
                                <p>Don't have an account yet? <a href="#" className="text-black font-semibold">Register for free</a></p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="pic basis-[30%] mt-28">
                   <img src="../../public/Images/bgimage2.png" alt="" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Login