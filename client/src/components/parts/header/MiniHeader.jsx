import SearchForm from "../search-form/SearchForm.header";
import { StyledMiniHeader } from '../../styles/parts/header/MiniHeader.styled';
import BurgerBtn from './BurgerBtn';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import Logo from './Logo';

const MiniHeader = () => {
    const { mode } = useContext(ThemeContext);

    return (
        <StyledMiniHeader mode={mode}>
            <SearchForm />
            <Logo />
            <BurgerBtn />
        </StyledMiniHeader>
    );
};

export default MiniHeader;