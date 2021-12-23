import React from 'react';
import './HeroSection.css';
import civilEngineer from '/Users/l/rhafaelherrera/src/components/images/civil-engineer-transparent.png';

function HeroSection() {
    return (
        <div>
            <div className='hero-section'>
                <div className='civil-engineer-container'>
                    <img src={civilEngineer} className='engineer-image' alt='civil-engineer-character-illustration' />
                </div>
                {/* <div className='construction-image-container'>
                    <img src={construction} className='construction-image' />
                </div> */}
                <h1 className='hero-header'>
                    Rhafael Herrera
                </h1>
            </div>
        </div>
    )
}



export default HeroSection


