import React from "react";

export default function MySkillSec(props){
    return(
        <div className="year-sec">
            <ul className="year-sec-list">
                <li className="year-sec-item">
                    <img src={props.img} alt="" />
                    <p>{props.year}</p>
                    <p>{props.type}</p>
                    <p>{props.des}</p>
                </li>
            </ul>
        </div>
    )
}