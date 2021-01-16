import React from "react";
import "./OpenJar.css";

const OpenJar = (props) => (
    <div className={props.Class}>
        <div className="OpenJar-info">
            <img
                alt={props.id}
                src={props.image}
            />
            <h2>{props.Name}</h2>
            <h2 className="card-price"> {'$' + props.Amount}</h2>
        </div>
    </div>
);


export default OpenJar;