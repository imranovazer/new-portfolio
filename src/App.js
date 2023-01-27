import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Alert from "./components/Alert";
import './styles/body.css'

const App = () => {
    const [connectClicked, setConnectClicked] = React.useState(false);
    const changeAlert = () => {
        setConnectClicked(prev => !prev)

    }
    return (<div className="App">
        <Navbar changeAlert={changeAlert} />
        <Header />
        <Projects />
        <Footer />
        {connectClicked && <Alert changeAlert={changeAlert} />}
    </div>);
}

export default App;