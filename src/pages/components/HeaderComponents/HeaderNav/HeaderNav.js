import React from 'react';
import Navigation from '../../multifunctional/Navigation/NavSceleton';
import ListItem from '../../multifunctional/Navigation/NavListItem';

const HeaderNav = () => {
    return (
        <Navigation>
            <ListItem linkUrl="#page-top">Home</ListItem>
            <ListItem linkUrl="#page-top">Home</ListItem>
            <ListItem linkUrl="#page-top">Home</ListItem>
            <ListItem linkUrl="#page-top">Home</ListItem>
        </Navigation>
    )
}

export default HeaderNav;
