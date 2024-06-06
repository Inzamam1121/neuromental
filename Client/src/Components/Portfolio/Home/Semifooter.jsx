import React from 'react'

const Semifooter = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <div className=' flex justify-center w-[90%]  ml-10 semi h-fit rounded-xl bg-gradient4
]'>
<div className='flex justify-end'>
    <img src='../Images/semifooter.png' alt='nothing' className='lg:w-[70%] w-[100%] h-[100%] img_2'/>
</div>
<div className='flex flex-col items-start justify-center gap-6 pl-10'>
    <h1 className='text-[#FFFFFF] font-pop font-bold'>Arrange a free information consultation</h1>
    <p className='font-pop text-white lg:w-[70%] w-[100%]'>Are you interested and still have questions about the course? Register for a free informational consultation . We would be happy to get in touch with you.</p>
    <button className='bg-gradient-to-r from-[#8B668B] to-[#251B25]  pl-5 pe-5 rounded-full font-pop text-white'>Arrange a meeting Now</button>
</div>
        </div>
      </div>
    </div>
  )
}

export default Semifooter
