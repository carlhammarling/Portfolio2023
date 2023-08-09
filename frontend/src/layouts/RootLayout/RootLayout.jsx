import React from 'react'
import { Outlet } from 'react-router-dom'
import "./RootLayout.scss"
import Navbar from '../../components/Navbar/Navbar'

const RootLayout = () => {
  return (
    <div className='siteWrapper'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default RootLayout