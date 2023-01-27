import React from "react";
import '../styles/header.css'
import Ava from '../images/Ava.jpg'
import Education from "./Education";


const Header = () => {

    const mySkills = ["React Js","Express Js","JavaScript","TypeScript","html","scss","Mysql","Mongo DB","Figma"]
    return <div className='HeaderContainer'>
        <div className="container forContainer">
            <div className="PersonalInfo">
                <div className="ProfilePicture">
                    <img src={Ava}/>
                </div>
                <div className="ContactInfo">
                    
                    <span className="name">Imranov Azer</span>
                    <br />
                    <span>
                    <i className='bx bx-mobile'></i>
                    +994 55 416 66 40
                    </span>
                    <br />
                    <span>
                    <i className='bx bxl-gmail'></i>
                    imranovazer@gmail.com
                    </span>
                    <br />
                    <span>
                        <i className='bx bxl-linkedin-square'></i>
                        <a href="https://www.linkedin.com/in/azer-imranov-896b2b222/">Click</a>
                    </span>
                    <br/>
                    <span>
                        <i className='bx bxl-github'></i>
                        <a href="https://github.com/imranovazer">Click</a>
                    </span>

                </div>
            </div>
            <div className="skillsInfo">
                <h2>Skill box</h2>
                <div className="SkillsBox">
                    {
                    mySkills.map((e,i) => <div key={i}>
                        <span>
                    <i className='bx bx-right-arrow'></i> {e}
                        </span>
                        <br />
                    </div>)
                    }
                </div>
                <h2>Education</h2>
                <Education / >
                
            </div>


        </div>



    </div >
}
export default Header;