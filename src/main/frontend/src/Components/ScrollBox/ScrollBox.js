import React from "react";
import "./ScrollBox.css";

const ScrollBox = (props) => (
    <div className="ScrollBox">
        <h2>{props.contents}</h2>
    </div>
);

export default ScrollBox;