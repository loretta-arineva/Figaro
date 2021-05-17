import React from 'react';
import ArrowButton from '../multifunctional/ArrowButton';

const GalleryCard = ({children}) => {
    return (
        <div className="gallery-card">
            {children}
            <ArrowButton>Discover</ArrowButton>
        </div>
    )
}

export default GalleryCard;
