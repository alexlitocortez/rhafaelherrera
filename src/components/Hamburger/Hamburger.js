import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

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

function Hamburger() {
    return (
        <div>
            <MenuBars />
        </div>
    )
}

export default Hamburger
