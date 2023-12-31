import React from 'react'
import { Outlet } from 'react-router'


const Layout = () => {
  return (
    <div>
        <Outlet/>
        <footer>
            <h3>30.12.2023</h3>
        </footer>
    </div>
  )
}

export default Layout