import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import './Hamburger.css';

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 990px) {
        display: block;
        background-size: contain;
        height: 30px;
        width: 2rem;
        color: black;
        cursor: pointer;
        position: fixed;
        top: 0.6rem;
        right: 10px;
        z-index: 999;

        &:hover {
            opacity: 0.3;
            transition: 0.2s ease-in-out;
        }
    }
`;

function Hamburger({ open, setOpen }) {

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
            <div>
                <MenuBars open={open} onClick={() => setOpen(!open)} />
            </div>
        </div>
    )
}

export default Hamburger