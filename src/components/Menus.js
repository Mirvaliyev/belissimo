import React from 'react'
const Menus = ({ menu,basketAdd }) => {
    return (
        <div className='rounded-md shadow-[0px_10px_20px_5px_rgba(0,0,0,0.4)] cursor-pointer flex flex-col bg-slate-200 overflow-hidden' onClick={()=>basketAdd(menu)}>
            <img src={"./assets/image/" + menu.category.name.toLowerCase() + "/" + menu.img} className='w-full object-cover' />
            <div className='p-[10px]'>
                <h2>{menu.name} <strong className='text-sm'> ({menu.code})</strong></h2>
                <span className=' text-gray-600 text-sm'>
                    {menu.price}.so'm
                </span>
            </div>
        </div>
    )
}
export default Menus
