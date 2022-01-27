import React from "react";

// Import styles
import './MenuDesktop.scss';

// Import components
import Logo from '../../components/logo/Logo'
import OptionsLink from "../optionsLink/OptionsLink";
import DinamicImg from '../dinamicImg/DinamicImg'
import TitleContainer from '../../pageComponents/titleContainer/TitleContainer'

//Import images
import LogoWhite from '../../assets/images/icons/logoWhite.svg'
import HeaderImg from '../../assets/images/desktop/image-header.jpg'
import ArrowDown from '../../assets/images/icons/icon-arrow-down.svg'

const hrefObj = {
    about: 'https://linkedin.com/in/marttinsangelica',
    services: 'https://angelicamarttins.github.io/portfolio/',
    projects: 'https://https://github.com/angelicamarttins',
    contact: 'https://linkedin.com/in/marttinsangelica'
};

function MenuDesktop(props) {
    return (
        
        <div>

        <div className="menu-desktop">
            <Logo src={LogoWhite} alt="Sunnyside white logo"/>

            <OptionsLink href={hrefObj} target='_blank' rel="external" />
        </div>

        <div className="title">
            <DinamicImg src={HeaderImg} alt='' /> 

            <TitleContainer src={ArrowDown}/>
        </div>

        </div>

    );
};

export default MenuDesktop;