import React from "react";


export default function EventSec(props){

    return(
    
        <div>
            <div className="main-event-sec">
                <div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <p className="event-main-head">
                                    {props.heading}
                                </p>

                                <p className="event-main-name">
                                    {props.name}
                                </p>

                                <p className="event-main-category">
                                    {props.category}
                                </p>

                                <p className="event-main-des">
                                    {props.des}
                                </p>
                            </div>
                            <div class="col">
                                <img src={props.img} alt="" className="event-main-img"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                1 of 2
                            </div>
                            <div class="col">
                                2 of 2
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                1 of 2
                            </div>
                            <div class="col">
                                2 of 2
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}