import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../../components/TopBar/TopBar'

export default function Admin() {
    return (
        <div className='flex flex-col relative ltr-theme'>
            <TopBar />
            <div className="container rtl-theme">
                <div className="p-main bg-green-600">
                    ممد جون این دیو برا توعه
                </div>
            </div>
        </div>
    )
}
