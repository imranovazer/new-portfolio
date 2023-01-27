import React from "react";
import '../styles/footer.css'
import facebook from '../images/Facebook.svg'
import linkedin from '../images/LinkedIn.svg'
import MERN from '../images/MERN.jpeg'
const Footer = () => {
    return (<div className="FooterContainer">
        <div className="container forFooter">
            <div className="Alert">
                <div className="shortMe">
                    I am third year student at Azerbaijan French university(UFAZ). My specalization is Computer Science. I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.
                </div>
                <div className="Mern">
                    <img src={MERN}  />

                </div>
                

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