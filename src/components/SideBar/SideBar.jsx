import React from 'react'
import { Link } from 'react-router-dom'
import { BiMenu, BiHomeAlt, BiChevronLeft, BiComment, BiUser, BiDockRight, BiFilm } from 'react-icons/bi'
import { BsStarFill } from 'react-icons/bs'
import { PiFilmScriptBold } from 'react-icons/pi'
import { RiPriceTagLine } from 'react-icons/ri'
import { CgDisplaySpacing } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'

export default function SideBar({ sideBarDisplay, sideBarDisplayHandler }) {

    const closeSideBar = () => {

        sideBarDisplayHandler()
    }
    return (
        <div className={`rtl-theme h-screen group w-80 md:w-16 transition-all md:hover:w-80 flex flex-col shadow-lg bg-second-bg-web-dark ${sideBarDisplay ? "-right-0" : "-right-80"} md:right-0 top-0 z-40 absolute py-6 gap-y-10`}>
            <div className="flex justify-between items-center px-4">
                <div className="flex items-center gap-x-2">
                    <img src="/images/logo.png" className='w-8' alt="" />
                    <Link to='/admin' className='flex md:hidden md:group-hover:flex text-2xl text-main-red-admin font-bold'>STREAMIT</Link>
                </div>
                <div className="flex md:hidden">
                    <AiOutlineClose className='text-xl text-main-red-admin cursor-pointer' onClick={closeSideBar} />
                </div>
            </div>
            <ul className='font-iransans h-full flex flex-col gap-y-4 overflow-y-auto overflow-x-hidden'>
                <li className='overflow-hidden h-8 cursor-pointer hover:text-main-red-admin transition-colors flex px-4 justify-between items-center text-main-red-admin border-l-4 border-main-red-admin py-1'>
                    <div className='flex items-center gap-x-2'>
                        <BiHomeAlt className='shrink-0 transition-all' />
                        <span className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all'>
                            داشبورد
                        </span>
                    </div>
                </li>
                <li className='overflow-hidden h-8 cursor-pointer hover:text-main-red-admin transition-colors flex px-4 justify-between items-center text-main-gray-text-admin py-1'>
                    <div className='flex items-center gap-x-2'>
                        <BsStarFill className='shrink-0 transition-all' />
                        <span className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all'>
                            رتبه بندی
                        </span>
                    </div>
                </li>
                <li className='overflow-hidden h-8 cursor-pointer hover:text-main-red-admin transition-colors flex px-4 justify-between items-center text-main-gray-text-admin py-1'>
                    <div className='flex items-center gap-x-2'>
                        <BiComment className='shrink-0 transition-all' />
                        <span className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all'>
                            نظرات
                        </span>
                    </div>
                </li>
                <li className='overflow-hidden h-8 cursor-pointer hover:text-main-red-admin transition-colors flex px-4 justify-between items-center text-main-gray-text-admin py-1'>
                    <div className='flex items-center gap-x-2'>
                        <BiUser className='shrink-0 transition-all' />
                        <span className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all'>
                            کاربران
                        </span>
                    </div>
                </li>
                <li className='overflow-hidden h-8 cursor-pointer hover:text-main-red-admin transition-colors flex px-4 justify-between items-center text-main-gray-text-admin py-1'>
                    <div className='flex items-center gap-x-2'>
                        <BiDockRight className='shrink-0 transition-all' />
                        <span className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all'>
                            دسته بندی
                        </span>
                    </div>
                    <BiChevronLeft className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all text-lg' />
                </li>
                <li className='overflow-hidden h-8 cursor-pointer hover:text-main-red-admin transition-colors flex px-4 justify-between items-center text-main-gray-text-admin py-1'>
                    <div className='flex items-center gap-x-2'>
                        <BiFilm className='shrink-0 transition-all' />
                        <span className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all'>
                            فیلم ها
                        </span>
                    </div>
                    <BiChevronLeft className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all text-lg' />
                </li>
                <li className='overflow-hidden h-8 cursor-pointer hover:text-main-red-admin transition-colors flex px-4 justify-between items-center text-main-gray-text-admin py-1'>
                    <div className='flex items-center gap-x-2'>
                        <PiFilmScriptBold className='shrink-0 transition-all' />
                        <span className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all'>
                            نمایش ها
                        </span>
                    </div>
                    <BiChevronLeft className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all text-lg' />
                </li>
                <li className='overflow-hidden h-8 cursor-pointer hover:text-main-red-admin transition-colors flex px-4 justify-between items-center text-main-gray-text-admin py-1'>
                    <div className='flex items-center gap-x-2'>
                        <RiPriceTagLine className='shrink-0 transition-all' />
                        <span className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all'>
                            قیمت گذاری
                        </span>
                    </div>
                </li>
                <li className='overflow-hidden h-8 cursor-pointer hover:text-main-red-admin transition-colors flex px-4 justify-between items-center text-main-gray-text-admin py-1'>
                    <div className='flex items-center gap-x-2'>
                        <CgDisplaySpacing className='shrink-0 transition-all' />
                        <span className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all'>
                            المان های رابط کاربری
                        </span>
                    </div>
                    <BiChevronLeft className='line-clamp-1 visible md:invisible opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:visible transition-all text-lg' />
                </li>
            </ul>
        </div>
    )
}
