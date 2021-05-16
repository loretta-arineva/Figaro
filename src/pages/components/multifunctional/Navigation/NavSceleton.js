import React from 'react';

const NavSceleton = ({children, classList}) => {
    return (
        <nav className={classList ? classList.join(" ") : "" }>
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export default NavSceleton;
