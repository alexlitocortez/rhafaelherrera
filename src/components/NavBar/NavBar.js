import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <nav className='NavBar'>
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

