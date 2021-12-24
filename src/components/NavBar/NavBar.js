import React, { useState } from 'react';
import './NavBar.css';
import logo from '/Users/l/rhafaelherrera/src/components/images/logo-icon.png';

function NavBar() {

    const [navbar, setNavbar] = useState(false)
    const [shadow, setShadow] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 40) {
            setNavbar(true);
            setShadow(true);
        } else {
            setNavbar(false);
            setShadow(false);
        }
    }

    window.addEventListener('scroll', changeBackground);


    return (
        <div>
            <nav className={`NavBar ${navbar ? 'navbar active' : 'navbar'} ${shadow ? 'shadow activeShadow' : 'shadow'}`}>
                <div className='icon-container'>
                    <img src={logo} className='logo-icon'/>
                    <h1 className='navigation-name'>| Rhafael Herrera</h1>
                </div>
                <ul className='NavBar-list'>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}



export default NavBar

