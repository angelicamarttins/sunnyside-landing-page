import React from "react";

// Import styles
import './MenuMobile.scss';

// Import components
import OptionsLink from "../optionsLink/OptionsLink";
import Logo from '../logo/Logo'
//Import images
import GreenLogo from '../../assets/images/icons/logoGreen.svg'

function MenuMobile(props) {
    const hrefObj = {
        about: 'https://linkedin.com/in/marttinsangelica',
        services: 'https://angelicamarttins.github.io/portfolio/',
        projects: 'https://https://github.com/angelicamarttins',
        contact: 'https://linkedin.com/in/marttinsangelica'
    };

    const classNameMobile = {
        list: 'op-link__list-m',
        item: 'op-link__list-m__item',
        link: 'op-link__list-m__link',
        contact: 'op-link__list-m__link op-link__list-m__link--contact'
    }

    const classNameDesktop = {
        list: 'op-link__list-d',
        item: 'op-link__list-d__item',
        link: 'op-link__list-d__link',
        contact: 'op-link__list-d__link op-link__list-d__link--contact'
    }

    return (
        <div className="menu-mobile">
            <Logo src={GreenLogo}/> 

            <OptionsLink className={classNameMobile} href={hrefObj} target='_blank' rel="external" />
        </div>
    )
    };

export default MenuMobile;