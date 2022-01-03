import React from 'react';
import './HeroSection.css';
import civilEngineer from '../images/civil-engineer-transparent.png';

function HeroSection() {
    return (
        <div>
            <section id='about'>
                <div className='hero-section'>
                    <div className='civil-engineer-container'>
                        <img src={civilEngineer} className='engineer-image' alt='civil-engineer-character-illustration' />
                    </div>
                </div>
            </section>
        </div>
    )
}



export default HeroSection


