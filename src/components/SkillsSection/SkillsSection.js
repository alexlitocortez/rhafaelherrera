import React from 'react';
import './SkillsSection.css';
import skillimageOne from '../images/skillImage One.png';
import skillimageTwo from '../images/skillImage Two .png';
import skillimageThree from '../images/skillsImage Three.png';

function SkillsSection() {
    return (
        <div>
            <div className='skill-section'>
                <div className='skill-image-container'>
                    <div className='skill-image-box'>
                        <img src={skillimageOne} className='skill-image' alt='design skills logo' />
                        <h2>Design</h2>
                        <p className='skill-paragraph'>
                            Designs projects with a definite scope and timeline. 
                        </p>
                    </div>
                    <div className='skill-image-box'>
                        <img src={skillimageTwo} className='skill-image' alt='project management logo' />
                        <h2>Management</h2>
                        <p className='skill-paragraph'>
                            Manages projects and oversees operations.
                        </p>
                    </div>
                    <div className='skill-image-box'>
                        <img src={skillimageThree} className='skill-image' alt='software skills logo' />
                        <h2>Software</h2>
                        <p className='skill-paragraph'>
                            Uses software to ensure structurally sound projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
