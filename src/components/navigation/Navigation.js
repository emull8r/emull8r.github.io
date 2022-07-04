import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavigationComponent extends Component {

    constructor(props) {

        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);

        this.state = {
            dropdown: false
        }

    }

    componentDidMount = () => {

        this.setState({
            dropdown: false
        });
        
    }

    toggleDropdown = () => {

        let toggle = !this.state.dropdown;

        this.setState({dropdown: toggle});
    };

    render() {

        return(
            <nav>
                <ul className='menus'>
                    <li className='menu-items'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='menu-items'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='menu-items'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className='menu-items'>
                        <button onClick={() => this.toggleDropdown()}>Gallery</button>
                        <ul className={`dropdown ${this.state.dropdown ? 'show' : ''}`}>
                            <li className='menu-items'>
                                <Link to='/comics' onClick={() => this.toggleDropdown()}>Comics</Link>
                            </li>
                            <li className='menu-items'>
                                <Link to='/creations' onClick={() => this.toggleDropdown()}>Creations</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );

    }
}
