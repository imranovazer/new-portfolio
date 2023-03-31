import MyNote from "../images/MyNote.png"
import eCommerce from "../images/eCommerce.png"
import theMind from "../images/TheMind.png"
import Quiz from "../images/Quiz.jpg";
import MonoFi from '../images/MonoFi.png'
import Blog from '../images/Blog.png'
const data = [
    {
        id: 0,
        src: eCommerce,
        link: "https://ecommerce38.netlify.app/",
        info: "eCommerce web site with ecommerce.js API"
    },
    {
        id: 1,
        src: MyNote,
        link: "https://subtle-axolotl-082eb9.netlify.app/",
        info: "It is beta version of My Notes web application"
    },
    {
        id: 2,
        src: Quiz,
        link: "https://homeworkprojectbwd.000webhostapp.com/index.php",
        info: "Simple fullstack web application for creating quizes"

    },
    {

        id: 3,
        src: "https://savalan.az/wp-content/uploads/2021/09/SavalanASPIAZ_LOGO_GOLD-1-1-3-5.jpg",
        link: "https://savalan38.netlify.app/",
        info: "Savalan"
    },
    {
        id: 4,
        src: theMind,
        link: "https://github.com/3plus3/TheMindGameProject",
        info: "It is the largest project on which I have worked really hard with my team. It is multiplayer card game on web. It implemented with websockets. Project not deployed yet but you can see the code in github"
    }
]
export const Prioritet = {
    MonoFi: {
        image: MonoFi,
        title: "Working on...",
        link: "https://monofi38.netlify.app/"
    },
    Blog: {
        image: Blog,
        title: "My fullstack app where for now you just can create posts",
        link: "https://my-blog38.netlify.app/"
    }
}
export default data;