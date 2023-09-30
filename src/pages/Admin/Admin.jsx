import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../../components/TopBar/TopBar'

export default function Admin() {
    return (
        <div className='flex flex-col relative'>
            <TopBar />
        </div>
    )
}
