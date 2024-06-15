import React from 'react'

const Setting = () => {
  return (
    <div className='w-[70%] m-auto font-pop'>
      <div>
        <p className='text-[#4F4C73] text-lg mb-4'>Account</p>

      </div>
      <div className='basis-[100%] flex lg:flex-row flex-col justify-between items-center bg-white px-16 py-4 rounded-sm mb-1'>
        <div className=' '>
          <h1 className='text-[#918EAF] text-lg'>Username</h1>
          <p className='text-sm'>@linda</p>
        </div>
        <div>
          <button className='px-5 py-3 bg-gradientbtn rounded-sm text-white'>Change</button>
        </div>

      </div>
      <div className='basis-[100%] flex lg:flex-row flex-col justify-between items-center bg-white px-16 py-4 rounded-sm mb-1'>
        <div className=' '>
          <h1 className='text-[#918EAF] text-lg'>Email Address</h1>
          <p className='text-sm'>hello@neorumental.com</p>
        </div>
        <div>
          <button className='px-5 py-3 bg-gradientbtn rounded-sm text-white'>Change</button>
        </div>

      </div>
      <div className='basis-[100%] flex lg:flex-row flex-col justify-between items-center bg-white px-16 py-4 rounded-sm mb-1'>
        <div className=' '>
          <h1 className='text-[#918EAF] text-lg'>Password</h1>
          <p className='text-sm'>**********</p>
        </div>
        <div>
          <button className='px-5 py-3 bg-gradientbtn rounded-sm text-white'>Change</button>
        </div>

      </div>
      <div className='basis-[100%] flex lg:flex-row flex-col justify-between items-center bg-white px-16 py-4 rounded-sm mb-1'>
        <div className=' '>
          <h1 className='text-[#918EAF] text-lg'>Deletion</h1>
          <p className='text-sm'>Permanently delete your account, posts, and comments.</p>
        </div>
        <div>
          <button className='px-5 py-3 bg-gradientred rounded-sm  text-white'>Change</button>
        </div>

      </div>
    </div>
  )
}

export default Setting