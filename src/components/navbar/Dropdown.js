import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ submenus, dropdown }) => {

    const handleClick = (path) => {

        console.log("Going to "+path);
    }

    return (
     <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
       <li key={index} className='menu-items'>
        <Link to={submenu.path} onClick={() => handleClick(submenu.path)}>{submenu.title}</Link>
       </li>
      ))}
     </ul>
    );
   };
   
export default Dropdown;