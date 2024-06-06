import React from 'react'

const Footer = () => {
    return (
            <div className="flex flex-col items-center gap-5 bg-gradient3 py-5">
                <div className="w-[40%]">
                    <img src="../../public/images/footerlogo.png" alt="" />
                </div>
                <div className="item font-pop text-white ">
                    <ul className='flex'>
                        <li className='px-2'>Home</li>
                        <li className='px-2'>About Us</li>
                        <li className='px-2'>Contact Us</li>
                    </ul>
                </div>
                <div className="copyright font-pop text-white">
                    <p>© 2024 Neuromentaltraining.</p>
                </div>
            </div>
    )
}

export default Footer