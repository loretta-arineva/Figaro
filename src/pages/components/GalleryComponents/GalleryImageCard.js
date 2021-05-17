import React from 'react';

const GalleryImageCard = ({imgUrl, imgAlt}) => {
    return (
        <div className="image-card">
            <img src={imgUrl} alt={imgAlt} />
        </div>
    )
}

export default GalleryImageCard;
