import React from "react";

export default function MySkillSec(props){
    return(
        <div className="container year-sec">
            <ul className="year-sec-list">
                <li className="year-sec-item">
                    <img src={props.img} alt="" />
                    <p>{props.year}</p>
                    <p>{props.type}</p>
                    <p className="year-sec-item-des">{props.des}</p>
                </li>
            </ul>
        </div>
    )
}