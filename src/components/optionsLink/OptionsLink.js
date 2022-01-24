import React from "react";

// Import styles
import './OptionsLink.scss';

function OptionsLink(props) {
    return (
        <div className="options-link">
            <ul className="options-link__list">
                <li className="options-link__item">
                    <a className="options-link__link" href={props.href.about} target={props.target} rel={props.rel}>about</a>
                </li>
                <li className="options-link__item">
                    <a className="options-link__link" href={props.href.services} target={props.target} rel={props.rel}>services</a>
                </li>
                <li className="options-link__item">
                    <a className="options-link__link" href={props.href.projects} target={props.target} rel={props.rel}>projects</a>
                </li>
                <li className="options-link__item">
                    <a className="options-link__link options-link__link--principal" href={props.href.contact} target={props.target} rel={props.rel}>contact</a>
                </li>
            </ul>
        </div>
    )
}


export default OptionsLink;