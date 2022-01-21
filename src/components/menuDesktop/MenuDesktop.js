import React from "react";

// Import styles
import './MenuDesktop.scss';

function MenuDesktop(props) {
    return (
        <div className="menu-desktop">
            <ul className="menu-desktop__list">
                <li className="menu-desktop__item">
                    <a className="menu-desktop__link" href={props.href} target={props.target} rel={props.rel}>About</a>
                </li>
                <li className="menu-desktop__item">
                    <a className="menu-desktop__link" href={props.href} target={props.target} rel={props.rel}>Services</a>
                </li>
                <li className="menu-desktop__item">
                    <a className="menu-desktop__link" href={props.href} target={props.target} rel={props.rel}>Projects</a>
                </li>
                <li className="menu-desktop__item">
                    <a className="menu-desktop__link" href={props.href} target={props.target} rel={props.rel}>Contacts</a>
                </li>
            </ul>
        </div>
    )
}

export default MenuDesktop;