import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to={"/form"}>registration</NavLink>
            </li>
            <li>
                <NavLink to={"/data-base"}>your data</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar