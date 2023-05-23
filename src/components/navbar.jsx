import React, {Component} from 'react';
import './css/navbar.css';

export default class Navbar extends Component {
    state = { 
        active: 'nav__menu',
    }

    navStyle = {
        textDecoration:'none',
        fontFamily: "'Chathura', sans-serif",
        fontSize:'200%',
        color: 'white',
        borderRadius: '5px',
        animation: '0.5s linear 0s 1 normal forwards running bgColorChangeBack',
        paddingBottom: '8px',
        paddingLeft: '24px',
        paddingRight: '24px'
    };

    navMenuStyle = {
        gap: '0px'
    }

    navToggle = () => {
        let newActive = 'nav__menu';
        if (this.state.active === 'nav__menu'){
            newActive+= ' nav__active';
        }
        this.setState({active: newActive});
    }
    render() { 
        return (
            <nav className='nav'>
                <a href='/' className='nav__logo'>Alan</a>
                <ul className={this.state.active} style={this.navMenuStyle}>
                    <li className="nav__link__box"><a style={this.navStyle} href="/" className="nav__link">Home</a></li>
                    <li className="nav__link__box"><a style={this.navStyle} href="/about_me" className="nav__link">About Me</a></li>
                    <li className="nav__link__box"><a style={this.navStyle} href="/resume" className="nav__link">Resume</a></li>
                    <li className="nav__link__box"><a style={this.navStyle} href="/skills" className="nav__link">Skills</a></li>
                    <li className="nav__link__box"><a style={this.navStyle} href="/projects" className="nav__link">Projects</a></li>
                    <li className="nav__link__box"><a style={this.navStyle} href="/contacts" className="nav__link">Contacts</a></li>
                </ul>
                <div onClick = {() => this.navToggle()} className="nav__toggler">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        );
    }
}
 
