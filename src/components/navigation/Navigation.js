import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavigationComponent extends Component {

    constructor(props) {

        super(props);

        this.setDropdown = this.setDropdown.bind(this);

        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.state = {
            dropdown: false
        }

    }

    componentDidMount = () => {

        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("touchstart", this.handleClickOutside);

        this.setState({
            dropdown: false
        });
        
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
        document.removeEventListener("touchstart", this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setDropdown(false);
        }
    }

    setDropdown = (value) => {
        
        this.setState({dropdown: value});
    }

    render() {

        return(
            <nav>
                <ul className='menus' ref={this.wrapperRef}>
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
                        <button onClick={() => this.setDropdown(!this.state.dropdown)}>Gallery</button>
                        <ul className={`dropdown ${this.state.dropdown ? 'show' : ''}`}>
                            <li className='menu-items'>
                                <Link to='/comics' onClick={() => this.setDropdown(false)}>Comics</Link>
                            </li>
                            <li className='menu-items'>
                                <Link to='/creations' onClick={() => this.setDropdown(false)}>Creations</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );

    }
}
