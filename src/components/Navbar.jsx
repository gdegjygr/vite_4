import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import clsx from 'clsx'


const Navbar = () => {
  const navTheme = useSelector(state => state.theme.light)
  
  const changeNavbarTheme = clsx({
    "light": navTheme,
    "darkness": !navTheme
  }) 
  
  return (
    <nav className={changeNavbarTheme}>
        <ul>
            <li className={changeNavbarTheme}>
                <NavLink to={"/form"}>registration</NavLink>
            </li>
            <li className={changeNavbarTheme}>
                <NavLink to={"/data-base"}>your data</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar