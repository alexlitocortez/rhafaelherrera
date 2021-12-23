import React from 'react';
import './PortfolioSection.css';
import constructionImage from '/Users/l/rhafaelherrera/src/components/images/construction-image.jpg';

function PortfolioSection() {
    return (
        <div>
            <section className='portfolio-section'>
                <div className='portfolio-header-container'>
                    <div className='construction-image-container'>
                        <img src={constructionImage} className='construction-image' />
                    </div>
                    <div className='portfolio-text-container'>
                        <h1 className='portfolio-header'>Portfolio</h1>
                        <p className='portfolio-paragraph'>I'm passionate about the art of
                    construction and am working with infrastructure that enables
                    communities to operate from roads, utilities, and overall
                    accessibility in everyday life. Here's my work.</p>
                    </div>
                </div>
                <div className='portfolio-cards'>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default PortfolioSection
