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
                        <p>
                            I'm able to design projects with a definite scope and timeline. 
                            This includes layouts and calculations.
                        </p>
                    </div>
                    <div className='skill-image'>
                        <img src={skillimageTwo} className='skill-image' alt='project management image' />
                        <p>
                            I'm able to manage projects and oversee the whole operation. This includes 
                            analysis and conclusion reports.
                        </p>
                    </div>
                    <div className='skill-image'>
                        <img src={skillimageThree} className='skill-image' alt='software skills image' />
                        <p>
                            I'm able to work with different software to ensure every project is
                            structurally sound.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
