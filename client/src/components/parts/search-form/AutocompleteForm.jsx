import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-context";
import { StyledSearchBtn } from "../../styles/parts/search-form/SearchBtn.styled";
import { StyledAutocompleteForm } from "../../styles/parts/search-form/AutocompleteForm.styled";
import useSearch from "../../../hooks/useSearch";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const AutocompleteForm = () => {
    const { mode } = useContext(ThemeContext);
    const { cities, isDisabled, handleOnChange,
        handleOnSubmit, handleOnClose } = useSearch();

    return (
        <>
            <StyledAutocompleteForm
                mode={mode}
                onChange={handleOnChange}
                onInputChange={handleOnChange}
                onClose={handleOnClose}
                autoHighlight
                id="combo-box-demo"
                options={cities}
                getOptionLabel={(option) => option.name}
                sx={{ width: "75%" }}
                renderInput={(params) => <TextField {...params}
                    className="search-input-style"
                    variant="outlined"
                    label={<SearchIcon className="label-icon" />}
                    placeholder="Search for a city"
                />}
            />
            <StyledSearchBtn
                className="search-btn"
                mode={mode}
                onClick={handleOnSubmit}
                disabled={isDisabled}>
                <SearchIcon className="search-icon" />
            </StyledSearchBtn>
        </>
    );
};

export default AutocompleteForm;