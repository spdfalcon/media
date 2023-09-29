import React, { useState } from 'react'
import { BiMessageSquareDetail, BiBell, BiSearch, BiMenu } from 'react-icons/bi'
import { HiMenuAlt1 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import TopBarMobieContent from '../TopBarMobieContent/TopBarMobieContent'

export default function TopBar() {

    const [menuDisplay, setMenuDisplay] = useState(false)
    const menuDisplayHandler = () => {

        setMenuDisplay(prevState => !prevState)
    }
    return (
        <div className="fixed top-0 right-0 left-0 h-20 shadow-lg">
            <div className="flex justify-between relative items-center h-full z-50 bg-second-bg-web-dark">
                <div className="container relative flex justify-between items-center h-full ltr-theme">
                    {/* main TopBar */}
                    <div className="hidden md:flex items-center gap-x-5 h-full">
                        <div className='flex h-12 w-12 rounded-full overflow-hidden cursor-pointer mr-4'>
                            <img src="/images/profile.jpg" alt="" />
                        </div>
                        <div className="flex relative text-main-gray-text-admin text-2xl cursor-pointer">
                            <BiMessageSquareDetail />
                            <span class="absolute flex h-3 w-3 -top-2 -right-2 items-center justify-center">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-md bg-sky-200 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-main-red-admin"></span>
                            </span>
                        </div>
                        <div className="flex relative text-main-gray-text-admin text-2xl cursor-pointer">
                            <BiBell />
                            <span class="absolute flex h-3 w-3 -top-2 -right-2 items-center justify-center">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-md bg-sky-200 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-main-red-admin"></span>
                            </span>
                        </div>
                        <div className="flex items-center font-iransans h-10 w-80 bg-main-bg-web-dark rounded ml-6 overflow-hidden">
                            <BiSearch className='text-main-gray-text-admin cursor-pointer shrink-0 text-xl mx-2' />
                            <input type="text" className='rtl-theme grow h-full bg-transparent outline-none pr-2 text-xs text-main-gray-text-admin placeholder:text-main-gray-text-admin' placeholder='اینجا جستجو کنید' />
                        </div>
                    </div>
                    {/* TopBar content toggle Icon */}
                    <div className='bg-main-red-admin/30 p-2 rounded-md cursor-pointer flex md:hidden' onClick={menuDisplayHandler}>
                        <HiMenuAlt1 className='text-2xl text-main-red-admin' />
                    </div>
                    {/* SideBar toggle icon & site logo in mobile size */}
                    <div className="flex md:hidden items-center gap-4">
                        <Link to='/admin' className='text-2xl text-main-red-admin font-bold'>STREAMIT</Link>
                        <BiMenu className='text-3xl text-main-red-admin cursor-pointer' />
                    </div>
                </div>
            </div>
            {/* top bar content in mobile size */}
            <TopBarMobieContent menuDisplay={menuDisplay} />
        </div>
    )
}
