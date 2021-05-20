import React from 'react';
import Logo from '../components/multifunctional/Logo/Logo';
import Navigation from '../components/multifunctional/Navigation/NavSceleton';
import ListItem from '../components/multifunctional/Navigation/NavListItem';
const Footer = () => {
    return (
        <footer>
            <Logo/>
            <h3>Information</h3>
            <Navigation>
                <ListItem>About us</ListItem>
                <ListItem>Style Guide</ListItem>
                <ListItem>Book</ListItem>
            </Navigation>

            <h3>Locations</h3>
            <Navigation>
                <ListItem>New York</ListItem>
                <ListItem>Los Angeles</ListItem>
                <ListItem>Milan</ListItem>
            </Navigation>
            
            <h3>Services</h3>
            <Navigation>
                <ListItem>Hair Styling</ListItem>
                <ListItem>Beard Styling</ListItem>
                <ListItem>Massages</ListItem>
                <ListItem>Coloring</ListItem>
            </Navigation>

            <h3>Follow Us</h3>
            <Navigation>
                <ListItem>Facebook</ListItem>
                <ListItem>Instagram</ListItem>
                <ListItem>Twitter</ListItem>
                <ListItem></ListItem>
            </Navigation>

            <div className="copyright">Created by <a href="https://loretta-arineva.dev/" target="_blank"><span>Loreta Krasteva</span></a></div>
            
        </footer>
    )
}

export default Footer
