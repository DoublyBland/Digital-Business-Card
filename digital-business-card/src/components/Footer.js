import React from "react";
import twitterImg from "../assets/Twitter Icon.png"
import fbImg from "../assets/Facebook Icon.png"
import instaImg from "../assets/Instagram Icon.png"
import gitImg from "../assets/GitHub Icon.png"

export default function Footer() {
    return(
        <div className="footer">
            <div>
                <img src={twitterImg} alt="twitter"></img>
                <img src={fbImg} alt="fb"></img>
                <img src={instaImg} alt="insta"></img>
                <img src={gitImg} alt="git"></img>
            </div>
        </div>
    )
}