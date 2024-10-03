import React from "react";

export default function Footer(){
    return(
        <div>
            <footer className="footer-sec">

                <div className="footer-contacts">
                    <p>Contacts</p>
                    <h2>Get In Touch</h2>
                    <div className="row">
                        <div className="col">
                            <img src="./images/footer-add.png" alt="" className="footer-img"/>
                            <p>Address</p>
                            <p>Sylhet Engineering College, Sylhet</p>
                        </div>
                        <div className="col">
                            <img src="./images/footer-email.png" alt="" className="footer-img"/>
                            <p>Email</p>
                            <p>shuvo88745@gmail.com</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src="./images/footer-phone.png" alt="" className="footer-img"/>
                            <p>Phone</p>
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
        </div>
    )
}