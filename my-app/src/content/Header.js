import { FaMoon, FaRegMoon } from 'react-icons/fa';
import { useState } from 'react';

function HeaderEl() {
    const [mode, setMode] = useState("Light");
    const modeIcon = mode == "Light" ? <FaRegMoon /> : <FaMoon/>;

    const updateMode = () => {
        document.body.classList = "";

        if(mode == "Light"){
            setMode("Dark");
            document.body.classList.add('darkMode');
        }else {
            setMode("Light");
        }
    }

    return(
        <div className="header">
            <div className="logo">Where in the World?</div>
            <div className="modeToggle" onClick={updateMode}>{modeIcon} {mode} Mode</div>
        </div>
    )
}

export default HeaderEl;