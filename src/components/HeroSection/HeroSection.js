import React from 'react';
import './HeroSection.css';
import civilEngineer from '/Users/l/rhafaelherrera/src/components/images/plan-48-23 copy.jpg';


function HeroSection() {
    return (
        <div>
            <div className='hero-section'>
                <p className='hero-paragraph'>
                    I'm a civil engineer changing the world one pipe at a time
                </p>
                <div className='hero-circles'>
                    <span className='dot'>
                        <p className='dot-text'>
                        Teamwork
                        </p>
                    </span>
                    <span className='dot'>
                        <p className='dot-text'>
                        Empathy
                        </p>
                    </span>
                    <span className='dot'>
                        <p className='dot-text'>
                        Love
                        </p>
                    </span>
                </div>
                <div className='civil-engineer-container'>
                    <img src={civilEngineer} className='engineer-image' />
                </div>
            </div>
        </div>
    )
}



export default HeroSection


