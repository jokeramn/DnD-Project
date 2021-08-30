import React from 'react'
import './header.css'
import NavMenu from '../nav-menu'

const Header = () => {
  return (
    <header className='app-header'>
      <div className='container'>
        <NavMenu />
      </div>
    </header>
  )
}

export default Header