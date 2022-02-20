import React from "react";
import tomImg from "../assets/tom.png"
import linkedInImg from "../assets/Icon/Font Awesome Free/Brands/L/linkedin.png"
import emailImg from "../assets/Mail.png"

export default function Info() {
    return(
        <div className="info">
            <img src={tomImg} alt="me"></img>
            <h1 className="info--name">Thomas Newman</h1>
            <h4 className="info--position">Software Developer</h4>
            <h5 className="info--email">newmanjthomas@gmail.com</h5>
            <div className="info--btns">
                <button className="info--btn--email"><img src={emailImg} alt="mail"></img>Email</button>
                <button className="info--btn--linkedIn"><img src={linkedInImg}></img>LinkedIn</button>
            </div>
        </div>
    )
}