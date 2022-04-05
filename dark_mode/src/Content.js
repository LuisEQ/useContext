import { useContext } from 'react';
import { DarkModeContext } from './Darkmode';

function Content() {
    const { darkMode } = useContext(DarkModeContext);
    const contentProvider = () => {
        if (darkMode) {
            return (
                <p>Este texto está en español mientras esté en dark mode, si cambias a light mode cambiará a inglés.</p>
            )
        }
        return (
            <p>This text is in English while light mode is enabled, if you switch to dark mode it will be in Spanish.</p>
        )
    }
    return (
        <div className={darkMode ? `Content Dark` : `Content Light`}>
            {contentProvider()}
        </div>
    )
}

export default Content;