import React from "react";

export default function MainSec(){
    return(
        <div className="main-section">
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
                                2018 Youngest photographer of CPS &
                                2024 Runners up of CPS photo award
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-me-sec">
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <img src="./images/aboutSectionDot.png" alt="" className="about-sec-dot"/>
                            <img src="./images/self-pic1.jpg" alt="" className="about-sec-pic"/>
                        </div>

                        <div class="col">
                            <h4>About Shuvo</h4>
                            <h3>Capturing Memorires Through Lenses</h3>
                            <p>I'm Shuvo, a passionate photographer who finds joy in capturing the essence of life through my lens. I specialize in street and wildlife photography, where every moment tells a story. Photography isn't just a hobby for me—it's a way to express creativity and preserve fleeting moments.</p>
                            <ul>
                                <li>Photography --------- 50%</li>
                                <li>Videogrphy --------- 20%</li>
                                <li>Editing --------- 60%</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}