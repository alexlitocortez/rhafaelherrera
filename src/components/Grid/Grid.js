import React from 'react';
import './Grid.css';

import constructionImage from '/Users/l/rhafaelherrera/src/components/images/construction-image.jpg';
import portfolioOne from '/Users/l/rhafaelherrera/src/components/images/portfolioOne illustration.png';
import portfolioTwo from '/Users/l/rhafaelherrera/src/components/images/portfolioTwo illustration.png';
import portfolioThree from '/Users/l/rhafaelherrera/src/components/images/portfolioThree illustration.png';


function Grid() {
    return (
        <div>
            <section id='portfolio'>
            <div className='grid-container'>
                <div className='grid-item-1'>
                    <img src={constructionImage} className='construction-image'/>
                </div>
                <div className='grid-item-2'>
                    <h1>Portfolio</h1>
                    <p className='portfolio-paragraph-grid'> 
                        The portfolio projects located below are from my time
                        in the field. My mission is to make everyday life easier 
                        for civilians and I work on projects that emphasize this. 
                    </p>
                </div>
                <div className='grid-item-3 cardBox'>
                    <div className='cardGrid'>
                        <img className='portfolio-image' src={portfolioOne} />
                        <h1>Groove And Grind</h1>
                        <p>
                            Groove and grind pavement. This pavement provides friction for vehicles to keep control during slippery conditions
                        </p>
                    </div>
                </div> 
                <div className='grid-item-4 cardBox'>
                    <div className='cardGrid'>
                        <img className='portfolio-image' src={portfolioTwo} />
                        <h1>Landslide Stabilization</h1>
                        <p>
                            Landslide stabilization of a failed concrete wall along a storm canal; 
                            braces and rip rap (rocks) were placed to prevent soil and concrete wall movement
                        </p>
                    </div>
                </div>
                <div className='grid-item-5 cardBox'>
                    <div className='cardGrid'>
                        <img className='portfolio-image' src={portfolioThree} />
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
