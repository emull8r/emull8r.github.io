import React from 'react';
import Dropdown from './Dropdown';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({ items }) => {
const [dropdown, setDropdown] = useState(false);

 return (
  <li className='menu-items'>
   {items.submenu ? (
    <>
     <button 
     type='button' 
     aria-haspopup='menu'
     aria-expanded={dropdown ? 'true' : 'false'}
     onClick={() => setDropdown((prev) => !prev)}
      >
      {items.title}{' '}
      
     </button>
     <Dropdown 
     submenus={items.submenu}
     dropdown={dropdown}
     />
    </>
   ) : (
    <Link to={items.path}>{items.title}</Link>
   )}
  </li>
 );
};

export default MenuItems;