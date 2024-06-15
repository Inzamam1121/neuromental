import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="flex flex-col items-center gap-5 bg-gradient3 py-5">
            <div className="w-[40%]">
                <img src="../../public/images/footerlogo.png" alt="" />
            </div>
            <div className="item font-pop text-white ">
                <ul className='flex'>
                    <li className='px-4'><Link to="/">Home</Link></li>
                    <li className='px-4'><a href="#about-us">About Us</a></li>
                    <li className='px-4'><Link to='contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="copyright font-pop text-white">
                <p>© 2024 Neuromentaltraining.</p>
            </div>
        </div>
    )
}

export default Footer