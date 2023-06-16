import React from 'react';
import { HeroBackground } from '../../styles/Styles';


const HeroContainer = ({ backgroundImage, text }) => {

    console.log(backgroundImage);
    return (

        <HeroBackground>
            <div className='hero' style={{
                backgroundImage: `url(${backgroundImage})`
            }}>
                <p className='hero-text'>{text}</p>
            </div>
        </HeroBackground>
    );
};

export default HeroContainer;
