import React from "react";

export default function Footer(){
    return(
        <div>
            <footer className="footer-sec">

                <div className="footer-contacts">
                    <p>Contacts</p>
                    <h2>Get In Touch</h2>
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
                    </div>

                </div>
            </footer>
        </div>
    )
}