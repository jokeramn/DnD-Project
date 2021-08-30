import React from 'react';
import './menu-list.css'
import { Link } from 'react-router-dom';



const MenuList = () => {
  return (
    <ul className='menu__list'>
      <li>
        <Link className='menu__item' to='/'>Home</Link>
      </li>
      <li>
        <Link className='menu__item' to='/catalog'>Catalog</Link>
      </li>
      <li>
        <Link className='menu__item' to='/about'>About</Link>
      </li>
    </ul>
  )
}

export default MenuList