import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
      <>
    <div>
        <nav className='nav'>
        <li>
          <Link to="/" className="header">Home</Link>
        </li>
        <li>
        <Link to="/Student" className="header">Student</Link>
        </li>
        <li>
         <Link to="/contact" className="header">Contact</Link>
          </li>
        </nav>
      <Outlet />
    </div>
    </>
  )
}

export default Header