import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.webp'


function Header() {
  return (
    <header>
      <div className="Logo">
        <p>SpotTroop</p>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="nav-ul">
          <li className="nav-link">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link to="" className="nav-link">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
