import React from "react";

// Import styles
import './MenuDesktop.scss';

// Import components
import Logo from '../../components/logo/Logo'
import OptionsLink from "../optionsLink/OptionsLink";

//Import images
import LogoWhite from '../../assets/images/icons/logoWhite.svg'

const hrefObj = {
    about: 'https://linkedin.com/in/marttinsangelica',
    services: 'https://angelicamarttins.github.io/portfolio/',
    projects: 'https://https://github.com/angelicamarttins',
    contact: 'https://linkedin.com/in/marttinsangelica'
};

function MenuDesktop(props) {
    return (
        
        <div className="menu-desktop">
            <Logo src={LogoWhite} alt="Sunnyside white logo"/>

            <OptionsLink href={hrefObj} target='_blank' rel="external" />
        </div>

    );
};

export default MenuDesktop;