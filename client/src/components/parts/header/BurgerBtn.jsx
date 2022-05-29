import { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const BurgerBtn = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="burger-menu-button">
                {
                    isOpen
                        ?
                        <MenuOpenIcon className="burger-menu-icon" />
                        :
                        <MenuIcon className="burger-menu-icon" />
                }
            </button>
            <BurgerMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    );
};

export default BurgerBtn;