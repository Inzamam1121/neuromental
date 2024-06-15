import React from 'react'

const Semifooter = () => {
  return (
    <div className='w-[90%] lg:w-[80%] mx-auto'>
      <div className=' flex m-auto  justify-center w-[90%]  lg:ml-10 ml-5 semi h-fit rounded-xl bg-gradient4'>
        <div className=' justify-end lg:flex  hidden'>
          <img src='../Images/semifooter.png' alt='nothing' className='lg:w-[70%] w-[100%] h-[100%] img_2' />
        </div>
        <div className='flex flex-col lg:items-start items-center justify-center gap-6 pl-10'>
          <h1 className='text-[#FFFFFF] text-xl font-pop font-bold mt-4 lg:mt-0'>Arrange a free information consultation</h1>
          <p className='font-pop text-white lg:w-[70%] w-[100%]'>Are you interested and still have questions about the course?Register for a free informational consultation. We would be happy to get in touch with you.</p>
          <button className='bg-gradient-to-r py-2 px-4 from-[#8B668B] to-[#251B25]  pl-5 pe-5 rounded-full lg:font-pop text-white lg:text-lg text-sm mb-3 lg:mb-0'>Arrange a meeting Now</button>
        </div>
      </div>
    </div>
  )
}

export default Semifooter
