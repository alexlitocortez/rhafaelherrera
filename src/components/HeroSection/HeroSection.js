import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <div>
            <div>
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
            </div>
        </div>
    )
}



export default HeroSection


