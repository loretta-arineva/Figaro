import React from 'react';
import ServiceComponent from '../components/ServicesComponents/Service';
import image1 from '../../assets/images/Services/hair-shape.svg';
import image2 from '../../assets/images/Services/hairdryer-silhouette-side-view.svg';
import image3 from '../../assets/images/Services/chair-side-view-silhouette.svg';
import image4 from '../../assets/images/Services/razor-hair-salon-tool.svg';
import image5 from '../../assets/images/Services/hair-salon-spray-bottle-and-can.svg';
import image6 from '../../assets/images/Services/hand.svg';

const Services = () => {
    return (
        <section id="services">
            <h2>Our Services</h2>
            <div className="services-grid">
                <ServiceComponent imgUrl={image1} imgAlt="Icon of a head">Hair styling</ServiceComponent>
                <ServiceComponent imgUrl={image2} imgAlt="Icon of a hairdryer">Edge up</ServiceComponent>
                <ServiceComponent imgUrl={image3} imgAlt="Icon of a chair">Hair cut</ServiceComponent>
                <ServiceComponent imgUrl={image4} imgAlt="Icon of a hair salon razor">Beard Trim</ServiceComponent>
                <ServiceComponent imgUrl={image5} imgAlt="Icon of a salon spray bottle">Coloring</ServiceComponent>
                <ServiceComponent imgUrl={image6} imgAlt="Icon of a hand">Scalp Massage</ServiceComponent>
            </div>
        </section>
    )
}

export default Services;
