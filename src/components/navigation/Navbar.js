import React, { Component } from 'react';
import { navbarItemsData } from './NavbarItemsData';
import NavbarItemComponent from './NavbarItem';

export default class NavbarComponent extends Component {

    render() {
        return(
            <nav>
                <ul className='menus'>
                    {navbarItemsData.map((menu, index) => {
                        return <NavbarItemComponent item={menu} key={index} />;
                    })}
                </ul>
            </nav>
        );

    }
}
