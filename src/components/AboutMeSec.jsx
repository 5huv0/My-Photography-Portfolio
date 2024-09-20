import React from "react";

export default function AboutMeSec(){
    return(
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
    )
}