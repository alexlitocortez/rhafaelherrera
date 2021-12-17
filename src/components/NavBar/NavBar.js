import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {

    const [navbar, setNavBar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div>
            <nav className={` NavBar ${navbar ? 'navbar active': 'navbar'}`}>
                <ul className='NavBar-list'>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar

