import React from 'react';
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
        background-color: #3e3e3e;
        top: 5rem;
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
    right: 0;
    color: #fff;
    height: 2rem;
    width: 2rem;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        position: absolute;
        right: 0;
    }

    @media screen and (max-width: 375px) {
        position: absolute;
        right: 0;
    }
`;


function HamburgerMenu({ open, setOpen }) {
    return (
        <div>
            <DropdownContainer id='container' open={open}>
                <CloseIcon open={open} onClick={() => setOpen(!open)} />
                <ul className='nav-list'>
                    <li onClick={() => setOpen(!open)}>About</li>
                    <li onClick={() => setOpen(!open)}>Portfolio</li>
                    <li onClick={() => setOpen(!open)}>Blog</li>
                    <li onClick={() => setOpen(!open)}>Contact</li>
                </ul>
            </DropdownContainer>
        </div>
    )
}

export default HamburgerMenu



