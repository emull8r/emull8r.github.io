import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef} from 'react';

const MenuItems = ({ items }) => {

    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {

        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };

        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const handleClick = (path) => {

        console.log("Going to "+path);
    }

    return (
    <li className='menu-items' ref={ref}>
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
        <Link to={items.path} onClick={() => handleClick(items.path)}>{items.title}</Link>
    )}
  </li>
 );
};

export default MenuItems;