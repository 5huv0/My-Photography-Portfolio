import React from "react";


export default function EventSec(props){

    return(
    
        <div>
            <div className="main-event-sec">
                <div class="container text-start">
                    <div class="row">
                        <div class="col">
                            <p className="event-main-head">
                                {props.heading}
                            </p>

                            <p className="event-main-name">
                                <span className="event-main-client">Client : </span> {props.name}
                            </p>

                            <p className="event-main-category">
                                <span className="event-main-cat"> Catergory : </span> {props.category}
                            </p>

                            <p className="event-main-des">
                                {props.des}
                            </p>
                            <button className="event-main-btn">
                                Read More
                            </button>
                        </div>
                        <div class="col">
                            <img src={props.img} alt="" className="event-main-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}