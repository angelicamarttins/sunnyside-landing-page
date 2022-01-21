import React from "react";

// Import styles
import './LearnMore.scss';

function LearnMore(props) {
    console.log(props.className)
    return (
    <div className="learn-more">
        
        <a className={props.className} href={props.href} target={props.target} rel={props.rel}>learn more</a>
            
    </div>
    )
};

export default LearnMore;