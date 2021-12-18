import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {

    // const navBar = document.getElementById('navBar');

    // var st = this.scroll()

    // var limit = 40

    // function navScroll() {
    //     if(st <= limit) {
    //     navBar.style.backgroundColor('opacity', 1 - window.scroll/500)
    //     } else {
    //         navBar.style.backgroundColor = 0;
    //     }
    // }

    // window.addEventListener('scroll', navScroll);


    // const changeBackground = () => {
    //     if (window.scrollY >= 40) {
    //         setNavBar(true);
    //     } else {
    //         setNavBar(false);
    //     }
    // }


    return (
        <div>
            <nav className='NavBar' id='navBar'>
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

