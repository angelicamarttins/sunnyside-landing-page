import React from 'react';

// Import components
import Menu from '../Menu'
import TitleContainer from '../../pageComponents/TitleContainer';
import DinamicImg from './DinamicImg'

// Import css
import '../assets/scss/Header.scss';

// Import images
import HeaderImgDesk from '../assets/images/desktop/image-header.jpg';
import HeaderImgMob from '../assets/images/mobile/image-header.jpg';


function Header() {
  
    return (
        
        <header className='header'>

            <Menu />

            <TitleContainer  src={ArrowDown} />

            <DinamicImg media="(min-width: 1440px)" srcset={HeaderImgDesk} src={HeaderImgMob} />

        </header>
        // Isso aqui deve estar no App.js
)
}  

export default Header;