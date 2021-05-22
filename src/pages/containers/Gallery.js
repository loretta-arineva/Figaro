import React from 'react';
import ImageCard from '../components/GalleryComponents/GalleryImageCard';
import Card from '../components/GalleryComponents/GalleryCard';

import image1 from '../../assets/images/Gallery/hairdresser.jpg';
import image2 from '../../assets/images/Gallery/hairdresser-office.jpg';
import image3 from '../../assets/images/Gallery/hairdresser-tools.jpg';
import image4 from '../../assets/images/Gallery/hairstyle.jpg';
import image5 from '../../assets/images/Gallery/hairstylist-studio.jpg';
import image6 from '../../assets/images/Gallery/scissors-icon.svg';

const Gallery = () => {
    return (
        <section id="gallery">
            <div className="gallery-grid">
            <ImageCard imgUrl={image4} imgAlt="A photo of a person getting a haircut." className="pic-1"></ImageCard>
            <Card className="pic-2">
                <img src={image6} alt="Scissors icon" />
                <div className="product-title lato-title">Products</div>
            </Card>
            <ImageCard imgUrl={image1} imgAlt="A photo of a person getting a haircut." className="pic-3"></ImageCard>
            <ImageCard imgUrl={image2} imgAlt="A photo of a person getting a haircut." className="pic-4"></ImageCard>
            <ImageCard imgUrl={image3} imgAlt="A photo of a person getting a haircut." className="pic-5"></ImageCard>
            <ImageCard imgUrl={image5} imgAlt="A photo of a person getting a haircut." className="pic-6"></ImageCard>
            </div>
        </section>
    )
}

export default Gallery;
