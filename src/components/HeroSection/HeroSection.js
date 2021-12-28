import React from 'react';
import './HeroSection.css';
import civilEngineer from '/Users/l/rhafaelherrera/src/components/images/civil-engineer-transparent.png';

function HeroSection() {
    return (
        <div>
            <section id='about'>
                <div className='hero-section'>
                    <div className='civil-engineer-container'>
                        <img src={civilEngineer} className='engineer-image' alt='civil-engineer-character-illustration' />
                    </div>
                    <p className='herosection-paragraph'>
                    I'm passionate about the art of
                    construction and am working with infrastructure that enables
                    communities to operate from roads, utilities, and overall
                    accessibility in everyday life. Here's my work.
                    </p>
                </div>
            </section>
        </div>
    )
}



export default HeroSection


