import React from 'react';
import './SkillsSection.css';
import skillimageOne from '/Users/l/rhafaelherrera/src/components/images/skillImage One.png';
import skillimageTwo from '/Users/l/rhafaelherrera/src/components/images/skillImage Two .png';
import skillimageThree from '/Users/l/rhafaelherrera/src/components/images/skillsImage Three.png';

function SkillsSection() {
    return (
        <div>
            <div className='skill-section'>
                <div className='skill-image-container'>
                    <div className='skill-image'>
                        <img src={skillimageOne} className='skill-image' alt='design skills image' />
                        <h2>Design</h2>
                        <p className='skill-paragraph'>
                            Designs projects with a definite scope and timeline. 
                        </p>
                    </div>
                    <div className='skill-image'>
                        <img src={skillimageTwo} className='skill-image' alt='project management image' />
                        <h2>Management</h2>
                        <p className='skill-paragraph'>
                            Manages projects and oversees operations.
                        </p>
                    </div>
                    <div className='skill-image'>
                        <img src={skillimageThree} className='skill-image' alt='software skills image' />
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
