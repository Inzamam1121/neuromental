import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";



const Nav = () => {
  const [Isdisplay, setIsdisplay] = useState(false)
  return (
    <>
      <div>
        <div className='flex justify-between py-4 items-center px-6 bg-white'>
          <div className="logo">
            <img src="../../public/images/logo.png" alt="" />
          </div>
          <div className="items mr-4 font-pop hidden lg:block">
            <ul className=' flex'>
              <li className='px-4'><Link>Home</Link></li>
              <li className='px-4'><Link>About Us</Link></li>
              <li className='px-4'><Link to='contact'>Contact Us</Link></li>
            </ul>
          </div>
          <div className="buttons lg:flex gap-4 mr-5 hidden font-pop text-lg font-semibold">
            <button className='border-2 px-7 py-2 rounded-2xl text-[#06050B]'><Link to='/login'>Login</Link></button>
            <button className='border-2 px-7 py-2 rounded-2xl bg-gradient3 text-[#FFFFFF]'><Link to='/signup'>Sign Up</Link></button>
          </div>
          <div className=' block lg:hidden text-2xl' onClick={() => { setIsdisplay(!Isdisplay) }}>
            {Isdisplay ? <IoClose /> : <TiThMenu />}
          </div>
        </div>

      </div>
      {Isdisplay && <div className='lg:hidden flex flex-col justify-between h-full fixed top-0 left-0 w-[70%] bg-white py-6 px-6'>
        <div className="logo w-fit">
          <img src="../../public/images/logo.png" alt="" />
        </div>
        <div className="sidebar font-pop font-bold text-lg">
          <ul className='px-8'>
            <li className='py-4 mr-12'><Link>Home</Link></li>
            <li className='py-4'><Link>About Us</Link></li>
            <li className='py-4'><Link>Contact Us</Link></li>
          </ul>
        </div>
        <div className="buttons flex flex-col md:flex-row gap-4 px-8 font-pop text-lg font-semibold">
          <button className='border-2 px-7 rounded-2xl text-[#06050B] py-2 w-fit'><Link>Login</Link></button>
          <button className='border-2 px-7 rounded-2xl bg-gradient3 text-white py-2 w-fit'><Link>Sign Up</Link></button>
        </div>
      </div>}
    </>

  )
}

export default Nav