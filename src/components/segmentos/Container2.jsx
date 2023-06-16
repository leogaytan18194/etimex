import React from 'react';
import { Container2Styles } from '../../styles/Styles';


const Container2 = ({ inverseOrder, title, description, image }) => {
    const containerStyle = inverseOrder ? 'container inverse' : 'container';

    return (
        <Container2Styles>
            <div className={containerStyle}>
                <div className='image-container'>
                    <img src={image} alt='' />
                </div>
                <div className='text-container'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </Container2Styles>
    );
};

export default Container2;
