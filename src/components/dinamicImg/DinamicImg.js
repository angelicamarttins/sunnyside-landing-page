import React from "react";

// Import css
import '../assets/scss/DinamicImg.scss'


function DinamicImg(props) {
    return (
        <div className='dinamic-img'>    
            
            <picture className="dinamic-img__picture">

            <source className="picture__src" media={props.media} srcSet={props.srcset} />

            <img className="picture__img" src={props.src} />

            </picture>
    
        </div>
    )
}

export default DinamicImg;