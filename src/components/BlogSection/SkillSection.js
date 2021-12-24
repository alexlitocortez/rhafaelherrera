import React from 'react';
import './SkillSection.css';
import autoCAD from '/Users/l/rhafaelherrera/src/components/images/autocad.png';
import waterCAD from '/Users/l/rhafaelherrera/src/components/images/watercad.png';

function BlogSection() {
    return (
        <div>
            <div className='skills-section'>
            <h1 className='skills-header'>Skills</h1>
            <div className='skill-cards'>
                <div className='skill-card'>
                    <img src={autoCAD} className='skill-card-image'/>
                </div>
                <div className='skill-card'>
                    <img src={waterCAD} className='skill-card-image' />
                </div>
            </div>
            </div>
        </div>
    )
}

export default BlogSection