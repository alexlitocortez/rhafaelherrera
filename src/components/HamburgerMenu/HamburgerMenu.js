import React, {useState} from 'react';
import './HamburgerMenu.css';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';



const DropdownContainer = styled.nav`
    display: none;

    @media screen and (max-width: 990px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 999;
        width: 100vw;
        height: 70vh;
        position: fixed;
        padding: 2rem 1rem;
        border-radius: 0.5rem;
        background-color: #f2f9fd;
        top: 4rem;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: ease-in-out;

        li {
            padding-right: 1rem;
        }
    }
`;

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
    position: absolute;
    top: 0;
    right: 0.7rem;
    color: #7a7c74;
    height: 2rem;
    width: 2rem;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        position: absolute;
        right: 0.7rem;
    }

    @media screen and (max-width: 375px) {
        position: absolute;
        right: 0.7rem;
    }
`;

    
function HamburgerMenu({ open, setOpen }) {

    const menuBackground = document.getElementById('container');


    const changeBackgroundColor = () => {
        if(window.scrollY >= 40) {
            menuBackground.style.transition = '0.6s ease-in-out';
            menuBackground.style.backgroundColor = 'white'
    } else if (window.scrollY <= 40) {
            menuBackground.style.transition = '0.6s ease-in-out';
            menuBackground.style.backgroundColor = '#f2f9fd';
            }
        }

    let isAnimating = false;
    window.addEventListener('scroll', () => {
        if (!isAnimating) {
            window.requestAnimationFrame(() => {
                changeBackgroundColor();
                isAnimating = false;
            });
            isAnimating = true;
        }
    })


    
    return (
        <div>
            <DropdownContainer id='container' open={open}>
                <CloseIcon open={open} onClick={() => setOpen(!open)} />
                <ul className='nav-list'>
                    <a href='#about'><li onClick={() => setOpen(!open)}>About</li></a>
                    <a href='#portfolio'><li onClick={() => setOpen(!open)}>Portfolio</li></a>
                    <a href='#contact'><li onClick={() => setOpen(!open)}>Contact</li></a>
                </ul>
            </DropdownContainer>
        </div>
    )
}

export default HamburgerMenu



