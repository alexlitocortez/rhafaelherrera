import React from 'react';
import './PortfolioSection.css';
import constructionImage from '/Users/l/rhafaelherrera/src/components/images/construction-image.jpg';
import portfolioOne from '/Users/l/rhafaelherrera/src/components/images/portfolioOne illustration.png';
import portfolioTwo from '/Users/l/rhafaelherrera/src/components/images/portfolioTwo illustration.png';
import portfolioThree from '/Users/l/rhafaelherrera/src/components/images/portfolioThree illustration.png';

function PortfolioSection() {
    return (
        <div>
            <div className='portfolio-header-container'>
                <div className='construction-image-container'>
                    <img src={constructionImage} className='construction-image' />
                </div>
                <div className='portfolio-text-container'>
                    <h1 className='portfolio-header'>Portfolio</h1>
                    <p className='portfolio-paragraph'>
                        I'm passionate about the art of
                        construction and am working with infrastructure that enables
                        communities to operate from roads, utilities, and overall
                        accessibility in everyday life. The portfolio projects located below are from my time
                        in the field. My mission is to make everyday life easier for civilians and I work on projects that
                        emphasize this. If you're interested in working together
                        , please contact me via the form below.
                    </p>
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
        </div>
    )
}

export default PortfolioSection
