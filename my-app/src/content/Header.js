import './styles/Header.scss';
import { FaMoon, FaRegMoon } from 'react-icons/fa';
import { useState } from 'react';

function HeaderEl() {
    const [mode, setMode] = useState("dark");
    const modeIcon = mode == "light" ? <FaRegMoon /> : <FaMoon/>;
    const modeString =  mode == "light" ? "Dark" : "Light";

    const updateMode = () => {
        document.body.classList = "";

        if(mode == "light"){
            setMode("dark");
            document.body.classList.add('darkMode');
        }else {
            setMode("light");
        }
    }

    return(
        <div className="header">
            <div className="logo">Where in the World?</div>
            <div onClick={updateMode}>{modeIcon} {modeString} Mode</div>
        </div>
    )
}

export default HeaderEl;