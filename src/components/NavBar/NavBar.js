import React, { useState } from 'react';
import './NavBar.css';

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

