import React from 'react';
import PriceCard from '../components/ServicesComponents/PriceCard';

const Prices = () => {
    return (
        <div id="prices">
            <div className="price-paragraph-wrapper">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="price-list-wrapper">
                <PriceCard cardTitle="Charataki Offer" dayFrom="Thu" dayTo="Sat">Mew</PriceCard>
                <PriceCard cardTitle="Terataki Offer" dayFrom="Mon" dayTo="Wed">Mew</PriceCard>
            </div>
        </div>
    )
}

export default Prices;
