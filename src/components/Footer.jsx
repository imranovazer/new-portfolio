import React from "react";
import '../styles/footer.css'
import facebook from '../images/Facebook.svg'
import linkedin from '../images/LinkedIn.svg'
const Footer = () => {
    return (<div className="FooterContainer">
        <div className="container forFooter">
            <div className="Alert">

            </div>

            <div className="soclinks">
                <a href="https://www.facebook.com/azer.imranov.18">
                    <img src={facebook}/>
                </a>
                <a href="https://www.linkedin.com/in/azer-imranov-896b2b222/    ">
                    <img src={linkedin}/>
                </a>

            </div>



        </div>

    </div>)
}

export default Footer;