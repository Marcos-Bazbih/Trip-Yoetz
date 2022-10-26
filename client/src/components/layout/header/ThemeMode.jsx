import { useContext, useRef } from 'react';
import { ThemeContext } from "../../../contexts/theme-context";
import { light_dark_blue, black_grey, black_purple, white_black } from "../../../state-management/actions/theme-actions";
import ColorLensIcon from '@mui/icons-material/ColorLens';

const ThemeMode = () => {
    const { modeDispatch } = useContext(ThemeContext);
    const toggleRef = useRef();

    const handleThemeMode = () => {
        toggleRef.current.classList.toggle('active');
    };
    const selectThemeAndSave = (action) => {
        modeDispatch(action());
        handleThemeMode();
    };

    return (
        <div className="theme-mode-wrapper">
            <button className="toggle-mode-btn" onClick={handleThemeMode}>
                <ColorLensIcon className="toggle-icon" />
            </button>
            <div ref={toggleRef} className="theme-palette">
                <button className="theme-option"
                    onClick={() => { selectThemeAndSave(white_black) }}>
                </button>
                <button className="theme-option"
                    onClick={() => { selectThemeAndSave(black_grey) }}>
                </button>
                <button className="theme-option"
                    onClick={() => { selectThemeAndSave(light_dark_blue) }}>
                </button>
                <button className="theme-option"
                    onClick={() => { selectThemeAndSave(black_purple) }}>
                </button>
            </div>
        </div>
    );
};

export default ThemeMode;