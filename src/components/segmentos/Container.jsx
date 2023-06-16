import React from 'react';
import { ContainerStyles } from '../../styles/Styles';


const Icon = ({ src, alt, text }) => {
    return (
        <div className='icon-text-container'>
            <div className='icon'>
                <img src={src} alt={alt} />
            </div>
            <div className='text-icon'>
                <p>{text}</p>
            </div>
        </div>
    );
};

const Container = ({ inverseOrder, title, subtitle, icon1, icon1Text, icon2, icon2Text, listTitle, listItems, backgroundImage }) => {
    const containerStyle = inverseOrder ? 'container inverse' : 'container';

    return (

        <ContainerStyles>

            <div className={containerStyle}>
                <div className='block block-left'>
                    <div className='block-text-container'>
                        <div className='txt-container'>
                            <h1>{title}</h1>
                            <p>{subtitle}:</p>
                        </div>
                        <div className='icon-container'>
                            <Icon src={icon1} alt='icon1' text={icon1Text} />
                            <Icon src={icon2} alt='icon2' text={icon2Text} />
                        </div>
                        <div className='list-container'>
                            <p>{listTitle}:</p>
                            <ul>
                                {listItems.map((item, index) => <li key={index}>{item.name}</li>)}
                            </ul>

                        </div>

                    </div>
                </div>
                <div className='block block-right' style={{ backgroundImage: `url(${backgroundImage})` }} />
            </div>
        </ContainerStyles>
    );
};

export default Container;
