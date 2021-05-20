import React from 'react';
import PriceCard from '../components/ServicesComponents/PriceCard';
import Navigation from '../components/multifunctional/Navigation/NavSceleton';
import NaninduPriceList from '../components/ServicesComponents/PriceLists/NaninduPriceList';
import TakiataPriceList from '../components/ServicesComponents/PriceLists/TakiataPriceList';

const Prices = () => {
    return (
        <div id="prices">
            <div className="price-paragraph-wrapper">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="price-list-wrapper">
                <PriceCard cardTitle="Takiata Offer" dayFrom="Thu" dayTo="Sat">
                    <NaninduPriceList />
                </PriceCard>
                
                <PriceCard cardTitle="Nanindu Offer" dayFrom="Mon" dayTo="Wed">
                    <TakiataPriceList />
                </PriceCard>
            </div>
        </div>
    )
}

export default Prices;
