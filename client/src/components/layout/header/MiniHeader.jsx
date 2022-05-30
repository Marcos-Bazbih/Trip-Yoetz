import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme-context';
import SearchForm from "../../parts/search-form/SearchForm.header";
import { StyledMiniHeader } from '../../styles/layout/header/MiniHeader.styled';
import ResponsiveMenu from './ResponsiveMenu';
import Logo from './Logo';

const MiniHeader = () => {
    const { mode } = useContext(ThemeContext);

    return (
        <StyledMiniHeader mode={mode}>
            <SearchForm />
            <Logo />
            <ResponsiveMenu />
        </StyledMiniHeader>
    );
};

export default MiniHeader;