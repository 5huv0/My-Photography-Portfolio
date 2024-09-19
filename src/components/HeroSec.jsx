import React from "react";

export default function HeroSec(){
    return(
        <div className="main-div">
            <h4 className="main-div-h4"><u>Hi, I am Shuvo</u></h4>
            <h1 className="main-div-h1">The Power to Capture the World in a Single image</h1>
            <p className="main-div-p">"Photography is more than just capturing images; it's about preserving fleeting moments that might otherwise be lost to time. Each photograph tells a unique story, a glimpse into the past that holds emotions, memories, and experiences within its frame. It has the power to evoke feelings and transport us back to the exact moment the picture was taken. Through photography, we see the world in new ways, finding beauty in the ordinary and the extraordinary alike. It allows us to communicate without words, capturing the essence of life and the world around us, one shutter click at a time."</p>
            <button className="main-btn">Get started</button>
            <div className="main-linkings">
                <img src="./images/linkedin-logo.png" alt="" className="img-link"/>
                <img src="./images/facebook-logo.png" alt="" className="img-link"/>
                <img src="./images/twitter-logo.png" alt="" className="img-link"/>
                <img src="./images/instagram-logo.png" alt="" className="img-link"/>
            </div>
        </div>
    )
}