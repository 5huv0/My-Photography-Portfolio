import React from "react";
export default function Client(props){
    return(
        <div className="client-sec">
            <div className="client-card">
                <img src={props.img} alt="" />
                <p>
                    {props.name}
                </p>
                <p>
                    {props.job}
                </p>
                <div className="client-linkings">
                    <a href="">
                        <img src={props.fb} alt="" />
                    </a>
                    <a href="">
                        <img src={props.twitter} alt="" />
                    </a>
                    <a href="">
                        <img src={props.insta} alt="" />
                    </a>
                    <a href="">
                        <img src={props.lnkdin} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}