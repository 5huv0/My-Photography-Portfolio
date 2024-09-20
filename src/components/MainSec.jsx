import React from "react";

export default function MainSec(){
    return(
        <div className="main-section">


{/* this is achievements section */}


            <div className="achievements-sec">
                <div className="text-center">
                    <div className="row">
                        <div className="col">
                            <p className="achi-head">Experience</p>
                            <p className="achi-des">7+ years of experiences</p>
                        </div>

                        <div className="col">
                            <p className="achi-head">Services</p>
                            <p className="achi-des">Photography, Videographpy, Editing</p>
                        </div>

                        <div className="col">
                            <p className="achi-head">Partners</p>
                            <p className="achi-des">Lorem, Ipsum, Loremm</p>
                        </div>

                        <div className="col">
                            <p className="achi-head">Achievements</p>
                            <p className="achi-des">
                                2019 Best photographer,
                                <br />
                                2018 Youngest photographer of CPS
                            </p>
                        </div>
                    </div>
                </div>
            </div>


{/* this is about me section  */}


            <div className="about-me-sec">
                <div className="text-center">
                    <div className="row">
                        <div className="col">
                            <img src="./images/aboutSectionDot.png" alt="" className="about-sec-dot"/>
                            <img src="./images/self-pic1.jpg" alt="" className="about-sec-pic"/>
                        </div>

                        <div className="col">
                            <h4 className="about-h4">About Shuvo</h4>
                            <h3 className="about-h3">Capturing Memorires Through Lenses</h3>
                            <p className="about-p">Hi there!
                                My name is Shuvo, and I'm a passionate photographer. I find immense joy in capturing the world around me through my lens. Street and wildlife photography are my particular areas of interest. There's something incredibly captivating about capturing candid moments in everyday life and the raw beauty of nature's creatures.
                                I love the challenge of capturing the perfect shot, whether it's a fleeting expression on a stranger's face or a majestic animal in its natural habitat. Through my photography, I aim to share my unique perspective and inspire others to appreciate the beauty of the world.
                            </p>
                            <ul className="about-ul">
                                <li>Photography --------- 50%</li>
                                <li>Videogrphy --------- 20%</li>
                                <li>Editing --------- 60%</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



{/* this is my service section */}


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
        </div>
    )
}