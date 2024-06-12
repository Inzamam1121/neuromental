import React from 'react'
import { IoCloudUpload } from "react-icons/io5";


const Payment = () => {
    return (
        <div className='w-[90%] m-auto p-10'>
            <div className='flex flex-col font-pop gap-2'>
                <h2 className='text-lg font-semibold'>Fee payment</h2>
                <p className='text-[#696969]'>Effortlessly handle your fee payment right here.</p>
            </div>
            <div className='p-24 flex lg:flex-row flex-col gap-4'>
                <div className="card1 bg-white lg:w-[40%] w-fit ">
                    <div className='py-3 bg-[#F8F8F8] p-2'>
                        <p>Payment Method</p>
                    </div>
                    <div className='flex gap-3 justify-between p-4 pb-10'>
                        <div>
                            <div className='flex font-semibold gap-2 font-pop'>
                                <div>
                                    <img src="../../panel/card.png" alt="" className='w-fit' />
                                </div>
                                <div>
                                    <p>A/c Title:</p>
                                    <p>A/c no:</p>
                                    <p>Bank Name:</p>
                                </div>
                                <div>
                                    <p>Abc</p>
                                    <p>123 456 789</p>
                                    <p>HBL</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='border-2 px-2 py-1 rounded-lg bg-transparent text-[]'>change</button>
                        </div>
                    </div>
                </div>
                <div className="card2 lg:w-[60%] w-fit font-pop bg-white rounded-xl px-4 pt-3 pb-4">
                    <div>
                        <p className='text-2xl font-semibold'>Reciept:</p>
                    </div>
                    <div className='flex items-center justify-center text-center text-[#4C535F] '>
                        <label htmlFor="post">
                            <p className='text-5xl'><IoCloudUpload /></p>
                            <input type="file" name="" id="post" className='opacity-0'/>
                        </label>

                    </div>
                    <div className='flex items-end justify-end'>
                        <button className='text-lg bg-[#BCBACA] text-white px-9 py-4 rounded-xl'>Send to Admin</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment