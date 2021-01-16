import React from "react";
import "./Jars.css";


const Jar = (props) => (
    <div className={props.Class}  onClick={props.onClick}>
        <div className="jar-info">
            <img
                alt={props.id}
                src={props.image}
            />
            <h3>{props.Name}</h3>
            <h1 className="priceTag">{'$' + props.Amount}</h1>
        </div>
    </div>
);


export default Jar;