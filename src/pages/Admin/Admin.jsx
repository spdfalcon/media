import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Admin() {
    return (
        <>
            <Link to={'rating'}>Rating Link</Link>
            <Outlet />
        </>
    )
}
