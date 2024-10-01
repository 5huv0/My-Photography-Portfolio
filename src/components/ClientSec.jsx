import React from "react";
export default function Client(props){
    return(
        <div className="client-sec">
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
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