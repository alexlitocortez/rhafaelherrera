import React from 'react';
import './HeroSection.css';
import civilEngineer from '/Users/l/rhafaelherrera/src/components/images/plan-48-23 copy.jpg';
import construction from '/Users/l/rhafaelherrera/src/components/images/construction-sim1.jpg';
import toolOne from '/Users/l/rhafaelherrera/src/components/images/#1tool.jpg';


function HeroSection() {
    return (
        <div>
            <div className='hero-section'>
                <div className='construction-image-container'>
                    <img src={construction} className='construction-image' />
                </div>
                <p className='hero-paragraph'>
                    I'm a civil engineer in training passionate about the art of
                    construction and am working with infrastructure that enables
                    communities to operate from roads, utilities, and overall
                    accessibility in everyday life.
                </p>
                <div className='hero-circles'>
                    <div className='dot'>
                        <img src={toolOne} className='toolOne' alt='engineering-tool' />
                    </div>
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


