import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DropdownComponent extends Component {

    constructor(props) {

        super(props);

        this.setDropdown = this.setDropdown.bind(this);

        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.state = {
            dropdown: false,
            item: this.props.item
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
            <li className='menu-items' ref={this.wrapperRef}>
                <button onClick={() => this.setDropdown(!this.state.dropdown)}>Gallery</button>
                <ul className={`dropdown ${this.state.dropdown ? 'show' : ''}`}>
                    {this.state.item.submenu.map((submenu, index) => (
                    <li key={index} className='menu-items'>
                        <Link to={submenu.path} onClick={() => this.setDropdown(false)}>{submenu.title}</Link>
                    </li>
                    ))}
                </ul>
            </li>
        );
    }
}
