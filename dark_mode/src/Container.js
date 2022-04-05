import { useContext } from "react";
import { DarkModeContext } from "./Darkmode";
import Content from './Content';
import "./App.css";

function Container() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className={darkMode ? 'Container Dark' : 'Container Light'}>
            <Content />
            <button class="button-64" role="button" onClick={handleClick}><span class="text">Cambiar modo</span></button>
        </div>
    )

}

export default Container;