import React from 'react';
import './Grid.css';

import constructionImage from '/Users/l/rhafaelherrera/src/images/construction-image.jpg';
import portfolioOne from '/Users/l/rhafaelherrera/src/images/portfolioOne illustration.png';
import portfolioTwo from '/Users/l/rhafaelherrera/src/images/portfolioTwo illustration.png';
import portfolioThree from '/Users/l/rhafaelherrera/src/images/portfolioThree illustration.png';

function Grid() {
    return (
        <div>
            <section id='portfolio'>
            <div className='grid-container'>
                <div className='grid-item-1'>
                    <img src={constructionImage} className='construction-image' alt='landscape of a construction site' />
                </div>
                <div className='grid-item-2'>
                    <h1>Portfolio</h1>
                    <p className='portfolio-paragraph-grid'> 
                        The portfolio projects located below are from my time
                        in the field. My mission is to make everyday life easier 
                        for civilians and these projects emphasize this. 
                    </p>
                </div>
                <div className='grid-item-3 cardBox'>
                    <div className='cardGrid'>
                        <img className='portfolio-image' src={portfolioOne} alt='consturciton vehicle fixing the road' />
                        <h1>Groove And Grind</h1>
                        <p>
                            Groove and grind pavement. This pavement provides friction for vehicles to keep control during slippery conditions
                        </p>
                    </div>
                </div> 
                <div className='grid-item-4 cardBox'>
                    <div className='cardGrid'>
                        <img className='portfolio-image' src={portfolioTwo} alt='warning equipment and rocks' />
                        <h1>Landslide Stabilization</h1>
                        <p>
                            Landslide stabilization of a failed concrete wall along a storm canal; 
                            braces and rip rap (rocks) were placed to prevent soil and concrete wall movement
                        </p>
                    </div>
                </div>
                <div className='grid-item-5 cardBox'>
                    <div className='cardGrid'>
                        <img className='portfolio-image' src={portfolioThree} alt='excavator digging a hole' />
                        <h1>New Sidewalk</h1>
                        <p>
                            Grading of subgrade soil to prepare for a new concrete sidewalk.
                            We're replacing a damaged sidewalk here
                        </p>
                    </div>
                </div>  
            </div>
            </section>
        </div>
    )
}

export default Grid
