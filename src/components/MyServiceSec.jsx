import React from "react";

export default function MyServiceSec(){
    return(
            <div className="my-service-sec">
                <div className="container text-center">
                    <div className="row">
                        <div className="col my-service">
                            <p>My Services</p>
                            <h3>Life Through Photos</h3>
                            <button>All Services</button>
                        </div>
                        <div className="col my-service-div">
                            <img src="./images/camera.png" alt="" className="my-service-pic"/>
                            <h3>Photography</h3>
                            <p>
                                "Freezing time, capturing memories."
                                "Your story, our art."
                            </p>
                            <a href="">Read More</a>
                        </div>
                        <div className="col my-service-div">
                            <img src="./images/videography.png" alt="" className="my-service-pic"/>
                            <h3>Videography</h3>
                            <p>
                                "Bringing your vision to life, frame by frame."
                                "Motion that speaks volumes."
                            </p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col my-service-div">
                            <img src="./images/editing.png" alt="" className="my-service-pic"/>
                            <h3>Editing</h3>
                            <p>
                                "Polishing perfection, pixel by pixel."
                                "Crafting your masterpiece."
                            </p>
                            <a href="">Read More</a>
                        </div>
                        <div className="col my-service-div">
                            <img src="./images/branding.png" alt="" className="my-service-pic"/>
                            <h3>Branding</h3>
                            <p>
                                "Building your brand identity, one story at a time."
                                "Your unique voice, amplified."
                            </p>
                            <a href="">Read More</a>
                        </div>
                        <div className="col my-service-div">
                            <img src="./images/bell.png" alt="" className="my-service-pic"/>
                            <h3>Events</h3>
                            <p>
                                "Preserving your special moments, forever."
                                "Capturing the essence of your event."
                            </p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}