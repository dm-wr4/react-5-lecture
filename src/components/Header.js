import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = (props) => {
  return (
    <header>
      <h1>ANDREW'S MUSIC EMPORIUM</h1>
      <nav className="nav-list">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/albums">
            <li>Albums</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
export default Header
