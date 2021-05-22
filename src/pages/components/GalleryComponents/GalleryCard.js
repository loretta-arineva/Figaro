import React from 'react';
import ArrowButton from '../multifunctional/ArrowButton';

const GalleryCard = ({children, className}) => {
    const classList = ["gallery-card", className].join(" ");

    return (
        <div className={classList}>
            {children}
            <ArrowButton>Discover</ArrowButton>
        </div>
    )
}

export default GalleryCard;
