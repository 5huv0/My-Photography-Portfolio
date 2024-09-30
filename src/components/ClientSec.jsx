import React from "react";
export default function Client(props){
    return(
        <div className="client-sec">
            <div className="client-heading">
                <div>
                    <p>
                        My Partners
                    </p>
                    <p>
                        Meet my trusted partners
                    </p>
                </div>
                <div>
                    <button>
                        View All
                    </button>
                </div>
            </div>

            <div className="client-card">
                <img src="" alt="" />
                <p>
                    {props.name}
                </p>
                <p>
                    {props.job}
                </p>
                <div className="client-linkings">
                    <a href="">
                        <img src="" alt="" />
                    </a>
                    <a href="">
                        <img src="" alt="" />
                    </a>
                    <a href="">
                        <img src="" alt="" />
                    </a>
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}