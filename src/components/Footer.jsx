import React from "react";

export default function Footer(){
    return(
        <div>
            <footer className="footer-sec">

                <div className="footer-contacts">
                    <p>Contacts</p>
                    <h2>Get In Touch</h2>
                    <div className="row">
                        <div className="col footer-linkings">
                            <img src="./images/footer-add.png" alt="" className="footer-img"/>
                            <h3>Address </h3>
                            <p>Sylhet Engineering College, Sylhet</p>
                        </div>
                        <div className="col footer-linkings">
                            <img src="./images/footer-email.png" alt="" className="footer-img"/>
                            <h3>Email</h3>
                            <p>shuvo88745@gmail.com</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col footer-linkings">
                            <img src="./images/footer-phone.png" alt="" className="footer-img"/>
                            <h3>Phone</h3>
                            <p>+8802357623</p>
                        </div>
                        
                    </div>
                </div>

                <div className="footer-form">
                    <div className="input-container">
                        <div className="input-row">
                            <input type="text" placeholder="FIRST NAME" id="f-name"/>
                            <input type="text" id="l-name" placeholder="LAST NAME"/>
                        </div>
                        <div className="input-row">
                            <input type="email" id="email" placeholder="EMAIL"/>
                        </div>
                        <div className="input-row">
                            <input type="text" placeholder="MESSAGES" id="name" />
                        </div>
                        <div className="input-row">
                            <button className="input-button">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-last-sec">
                    <div>
                        <img src="./images/logo-nav.png" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sunt molestias earum cupiditate quibusdam, aperiam laboriosam voluptatum impedit ullam sapiente deleniti non. Dolorem, eaque temporibus autem perferendis ipsam sapiente quo?
                        </p>
                    </div>
                    <div> 
                        <h3>
                            Quicklinks
                        </h3>
                        <a href="">
                            Home
                        </a>
                        <a href="">
                            About
                        </a>
                        <a href="">
                            FAQs
                        </a>
                        <a href="">
                            Blog
                        </a>
                        <a href="">
                            Contact
                        </a>
                    </div>

                    <div>
                        <h3>
                            Get In Touch
                        </h3>
                        <p>
                            A: Sylhet
                        </p>
                        <p>
                            P: +8802357623
                        </p>
                        <p>
                            E: shuvo88745@gmail.com
                        </p>
                        <a href="">
                            <img src="./images/facebook-logo.png" alt="" />
                        </a>
                        <a href="">
                            <img src="./images/instagram-logo.png" alt="" />
                        </a>
                        <a href="">
                            <img src="./images/linkedin-logo.png" alt="" />
                        </a>
                    </div>
                </div>
        </div>
    )
}