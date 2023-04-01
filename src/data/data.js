import MyNote from "../images/MyNote.png"
import MyNote1 from "../images/MyNote1.png"

import eCommerce from "../images/eCommerce.png"
import eCommerce1 from "../images/eCommerce1.png"
import eCommerce2 from "../images/eCommerce2.png"
import theMind from "../images/TheMind.png"
import theMind1 from "../images/TheMind1.png"
import theMind2 from "../images/TheMind2.png"
import theMind3 from "../images/TheMind3.png"
import theMind4 from "../images/TheMind4.png"
import theMind5 from "../images/TheMind5.png"
import Quiz from "../images/Quiz.jpg";
import Quiz1 from "../images/Quiz1.png";
import Quiz2 from "../images/Quiz2.png";
import Quiz3 from '../images/Quiz3.png'
import MonoFi from '../images/MonoFi.png'
import MonoFi1 from '../images/MonoFi1.png'
import MonoFi2 from '../images/MonoFi2.png'

import MonoFi3 from '../images/MonoFi3.png'

import Blog from '../images/Blog.png'
import Blog1 from '../images/Blog1.png'
import Blog2 from '../images/Blog2.png'
import Blog3 from '../images/Blog3.png'
import Savalan from '../images/Savalan.png'
import Savalan2 from '../images/Savalan2.png'
import Savalan3 from '../images/Savalan3.png'
import Savalan4 from '../images/Savalan4.png'
const data = [
    {
        id: 0,
        src: [eCommerce, eCommerce1, eCommerce2],
        link: "https://ecommerce38.netlify.app/",
        info: "eCommerce web site with ecommerce.js API. In this project I used Redux library for managing the state"
    },
    {
        id: 1,
        src: [MyNote, MyNote1],
        link: "https://subtle-axolotl-082eb9.netlify.app/",
        info: "It is beta version of My Notes web application. Here just used local storage to store written notes."
    },
    {
        id: 2,
        src: [Quiz, Quiz1, Quiz2, Quiz3],
        link: "https://homeworkprojectbwd.000webhostapp.com/index.php",
        info: "Simple fullstack web application written with pure php for creating quizes"

    },
    {

        id: 3,
        src: ["https://savalan.az/wp-content/uploads/2021/09/SavalanASPIAZ_LOGO_GOLD-1-1-3-5.jpg", Savalan, Savalan2, Savalan3, Savalan4],
        link: "https://savalan38.netlify.app/",
        info: "Landing page of website for famous vine Savalan"
    },
    {
        id: 4,
        src: [theMind, theMind1, theMind2, theMind3, theMind4, theMind5],
        link: "https://github.com/3plus3/TheMindGameProject",
        info: "It is the largest project on which I have worked really hard with my team. It is multiplayer card game on web. It implemented with websockets. Project not deployed yet but you can see the code in github"
    }
    ,
    {
        id: 5,
        src: [MonoFi, MonoFi1, MonoFi2, MonoFi3],
        info: "Landing page of MonoFi project.",
        link: "https://monofi38.netlify.app/"

    },
    {
        id: 6,
        src: [Blog, Blog1, Blog2, Blog3],
        info: "My fullstack app where for now you just can create posts. The authorization also implemented",
        link: "https://my-blog38.netlify.app/"


    }
]
export const Prioritet = {
    MonoFi: {
        image: MonoFi,
        title: "Landing page of MonoFi project.",
        link: "https://monofi38.netlify.app/"
    },
    Blog: {
        image: Blog,
        title: "My fullstack app where for now you just can create posts",
        link: "https://my-blog38.netlify.app/"
    }
}
export default data;