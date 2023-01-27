import React from "react";
import '../styles/navbar.css'
import Logo from '../images/Logo.png'

const Navbar = ({changeAlert}) =>
{
    
    return (<div className="Navbar">
        <div className="Logo">
            <img src={Logo}/>
        </div>
        <div className="Contact" onClick={()=>changeAlert()}>
            Contact
        </div>

    </div>)
}
export default Navbar;