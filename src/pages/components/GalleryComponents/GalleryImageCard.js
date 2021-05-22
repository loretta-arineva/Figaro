import React from 'react';

const GalleryImageCard = ({imgUrl, imgAlt, className}) => {
    const classList = ["image-card", className].join(" ");
    
    return (
        <div className={classList}>
            <img src={imgUrl} alt={imgAlt} />
        </div>
    )
}

export default GalleryImageCard;
