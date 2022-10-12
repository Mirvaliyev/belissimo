import React from 'react'
import {Link} from 'react-router-dom'
const NavbarComponent = () => {
    return (
        <div className='w-full h-[60px] bg-[#2266A8] flex justify-between items-center pl-[100px] pr-[100px]'>
            <strong className='text-white text-xl'>
                <Link to={'/'}>
                   Belissimo
                </Link>
            </strong>
            <ul className='flex items-center'>
                <Link to={'/'} className='px-[10px] py-[5px] bg-[rgba(255,255,255,0.2)] tracking-[1px] cursor-pointer mr-[20px] rounded-sm text-white'>Assosiy</Link>
                <Link to={'/'} className='px-[10px] py-[5px] bg-[rgba(255,255,255,0.2)] tracking-[1px] cursor-pointer mr-[20px] rounded-sm text-white'>Yangiliklar</Link>
            </ul>
        </div>      
    )
}

export default NavbarComponent
