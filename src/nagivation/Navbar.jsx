import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
      <nav>
        <ul>
          <li><Link to="/" style={{textDecoration:'none'}}>Home</Link></li>
          <li><Link to="/Work"style={{textDecoration:'none'}}>Details</Link></li>
          <li><Link to="/todolist"style={{textDecoration:'none'}}>Personal</Link></li>
        </ul>
        <h1 className='navbar-title'>PASSWORD MANAGER</h1>
      </nav>
    </div>
  )
}

export default Navbar
