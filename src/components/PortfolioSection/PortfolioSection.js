import React from 'react';
import './PortfolioSection.css';
import constructionImage from '/Users/l/rhafaelherrera/src/components/images/construction-image.jpg';
import portfolioOne from '/Users/l/rhafaelherrera/src/components/images/portfolioOne.jpeg';
import portfolioTwo from '/Users/l/rhafaelherrera/src/components/images/portfolioTwo.jpeg';
import portfolioThree from '/Users/l/rhafaelherrera/src/components/images/portfolioThree.jpeg';

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
                        <img className='portfolio-image' src={portfolioOne} />
                        <h1>Groove And Grind</h1>
                        <p>
                            Groove and grind pavement. This pavement provides friction for vehicles to keep control during slippery conditions
                        </p>
                    </div>
                    <div className='card'>
                        <img className='portfolio-image' src={portfolioTwo} />
                        <h1>Landslide Stabilization</h1>
                        <p>
                            Landslide stabilization of a failed concrete wall along a storm canal; 
                            braces and rip rap (rocks) were placed to prevent soil and concrete wall movement
                        </p>
                    </div>
                    <div className='card'>
                        <img className='portfolio-image' src={portfolioThree} />
                        <h1>New Sidewalk</h1>
                        <p>
                            Grading of subgrade soil to prepare for a new concrete sidewalk.
                            We're replacing a damaged sidewalk here
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PortfolioSection
