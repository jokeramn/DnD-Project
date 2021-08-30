import React from 'react'
import './nav-menu.css'
import MenuList from '../menu-list'
import { Link } from 'react-router-dom'

const NavMenu = () => {
  return (
    <nav className='menu'>
      <Link to='/' className='menu__logo'>BeerShop</Link>
      <MenuList />
    </nav>
  )
}

export default NavMenu