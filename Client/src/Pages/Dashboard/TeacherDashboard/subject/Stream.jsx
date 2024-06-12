import React from 'react'
import { Link } from 'react-router-dom'
import { ImBooks } from "react-icons/im";


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
            <div className="bg-[#D2D2D27D] p-4 rounded-lg flex flex-col space-x-4 shadow-sm ">
                
                <textarea type='text' placeholder='Announce something to your class' className='bg-[#D2D2D27D]' rows={5}/>
                <div className='flex gap-8 py-5 border-b-4 border-mainpurple mb-3'>
                    <img src="../../Teacher/B.png" alt=""  className='lg:w-[1%] h-fit'/>
                    <img src="../../Teacher/I.png" alt="" className='lg:w-[0.6%] h-fit'/>
                    <img src="../../Teacher/U.png" alt="" className='lg:w-[1%] h-fit'/>
                    <img src="../../Teacher/details.png" alt="" className='lg:w-[1%] h-fit'/>
                </div>
                <div className='flex gap-5 items-end justify-end '>
                    <button className='text-white mb-2'>CANCEL</button>
                    <button className='bg-[#B1AFBF] text-white px-6 py-2 rounded-2xl'>POST</button>
                </div>
            </div>
        </div>
    </div>
</div>  )
}

export default Stream