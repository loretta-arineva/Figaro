import React from 'react'
import Title from '../components/HeroComponents/HeroTitle';
import Description from '../components/HeroComponents/HeroDescription';
import Button from '../components/multifunctional/ArrowButton';

const Hero = () => {
    return (
        <section id="hero">
            <Title></Title>
            <Description></Description>
            <Button>Discover</Button>
        </section>
    )
}

export default Hero
