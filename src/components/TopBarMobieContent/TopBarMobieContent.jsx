import React from 'react'
import { BiMessageSquareDetail, BiBell, BiSearch } from 'react-icons/bi'

export default function TopBarMobieContent({ menuDisplay }) {
    return (
        <div className={`container flex items-center gap-x-5 md:hidden z-10 absolute left-0 right-0 h-20 shadow-md bg-main-bg-web-dark transition-all ${menuDisplay ? 'top-20': 'top-0'}`}>
            <div className='flex h-12 w-12 rounded-full overflow-hidden cursor-pointer mr-4'>
                <img src="/images/profile.jpg" alt="" />
            </div>
            <div className="flex relative text-main-gray-text-admin text-2xl cursor-pointer">
                <BiMessageSquareDetail />
                <span className="absolute flex h-3 w-3 -top-2 -right-2 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-md bg-sky-200 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-main-red-admin"></span>
                </span>
            </div>
            <div className="flex relative text-main-gray-text-admin text-2xl cursor-pointer">
                <BiBell />
                <span className="absolute flex h-3 w-3 -top-2 -right-2 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-md bg-sky-200 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-main-red-admin"></span>
                </span>
            </div>
            <div className="flex items-center font-iransans h-10 w-80 bg-main-bg-web-dark rounded ml-6 overflow-hidden">
                <BiSearch className='text-main-gray-text-admin cursor-pointer shrink-0 text-xl mx-2' />
            </div>
        </div>
    )
}
