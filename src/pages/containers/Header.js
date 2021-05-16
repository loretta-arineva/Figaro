import React from 'react'
import Logo from '../components/multifunctional/Logo/Logo';
import MainMenu from '../components/HeaderComponents/HeaderNav/HeaderNav';
import Hamburger from '../components/HeaderComponents/HamburgerComponent/Hamburger';

const Header = () => {
    return (
        <header>
            <Logo />
            <MainMenu />
            <Hamburger />
        </header>
    )
}

export default Header
