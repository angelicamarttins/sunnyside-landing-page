import React from 'react';

// Import components
import DinamicImg from './DinamicImg.js'

// Import css
import '../assets/scss/Header.scss';

// Import images
import HeaderImgDesk from '../assets/images/desktop/image-header.jpg';
import HeaderImgMob from '../assets/images/mobile/image-header.jpg';
import ArrowDown from '../assets/images/icons/icon-arrow-down.svg';

function Header(props) {
  
    return (
    <header className='header'>

        <div className='title-container'>
            <h1 className='title-container__title'>we are creatives</h1>
            <img className='title-container__arrow-down' src={ArrowDown} />
        </div>

        <DinamicImg media="(min-width: 1440px)" srcset={HeaderImgDesk} src={HeaderImgMob} />

    </header>
)
}  

export default Header;