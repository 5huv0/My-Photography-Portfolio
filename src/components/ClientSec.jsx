import React from "react";
export default function Client(props){
    return(
        <div className="client-sec">
            <div className="card">
                <img src={props.img} className="client-sec-img" alt=""/>
                <div className="card-body">
                    <p className="client-sec-name">
                        {props.name}
                    </p>
                    <p className="client-sec-job">
                        {props.job}
                    </p>
                    <img src={props.underline} alt="" className="client-sec-ul"/>
                </div>
                <div className="client-linkings">
                    <a href="#" className="card-link">
                        <img src={props.fb} alt="" className="client-linkings-img"/>
                    </a>
                    <a href="#" className="card-link">
                    <img src={props.insta} alt="" className="client-linkings-img"/>
                    </a>
                    <a href="#" className="card-link">
                    <img src={props.lnkdin} alt="" className="client-linkings-img"/>
                    </a>
                </div>
            </div>
        </div>
    )
}













{/* <div className="client-card">
                <img src={props.img} alt="" className="client-sec-img"/>
                <p className="client-sec-name">
                    {props.name}
                </p>
                <p className="client-sec-job">
                    {props.job}
                </p>
                <a href="">
                    <img src={props.fb} alt="" className="client-linkings-img"/>
                </a>
                <a href="">
                    <img src={props.insta} alt="" className="client-linkings-img"/>
                </a>
                <a href="">
                    <img src={props.lnkdin} alt="" className="client-linkings-img"/>
                </a>
            </div> */}