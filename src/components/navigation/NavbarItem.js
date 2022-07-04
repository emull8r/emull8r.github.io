import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdownComponent from './NavbarDropdown';

export default class NavbarItemComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            item: this.props.item
        }
    }

    render() {

        return(
            <li className='menu-items' ref={this.wrapperRef}>
                {this.state.item.submenu ? (
                    <NavbarDropdownComponent item={this.state.item}/>
                ) : (
                    <Link to={this.state.item.path}>{this.state.item.title}</Link>
            )}
            </li>
        );
    }
}
