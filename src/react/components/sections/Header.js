import React from 'react';

import DesktopNavigation from '../ui/DesktopNavigation';
import MobileNavigation from '../ui/MobileNavigation';
import HomeButton from '../ui/HomeButton';



export class Header extends React.Component {
    render() {
        return (
            <header id="Header" className="header">
                <HomeButton internal />
                <DesktopNavigation />
                <MobileNavigation />
            </header>
        );
    }
}


export default Header;