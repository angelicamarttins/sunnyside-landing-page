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
                    <a className="menu-desktop__link" href={props.href} target={props.target} rel={props.rel}>services</a>
                </li>
                <li className="menu-desktop__item">
                    <a className="menu-desktop__link" href={props.href} target={props.target} rel={props.rel}>projects</a>
                </li>
                <li className="menu-desktop__item">
                    <a className="menu-desktop__link menu-desktop__link--principal" href={props.href} target={props.target} rel={props.rel}>contact</a>
                </li>
            </ul>
        </div>
    )
}

export default MenuDesktop;