import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-context";
import { StyledSearchBtn } from "../../styles/parts/StyledSearchBtn";
import useSearch from "../../../hooks/useSearch";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteForm = () => {
    const { mode } = useContext(ThemeContext);
    const { cities, isDisabled, handleOnChange,
        handleOnSubmit, handleOnClose } = useSearch();

    return (
        <>
            <Autocomplete
                onChange={handleOnChange}
                onInputChange={handleOnChange}
                onClose={handleOnClose}
                autoHighlight
                id="combo-box-demo"
                options={cities}
                getOptionLabel={(option) => option.name}
                sx={{ width: "80%" }}
                renderInput={(params) => <TextField {...params}
                    className="search-input-style"
                    variant="outlined"
                    label={<SearchIcon className="label-icon" />}
                    placeholder="Search for a city"
                />}
            />
            <StyledSearchBtn
                mode={mode}
                onClick={handleOnSubmit}
                disabled={isDisabled}>
                <SearchIcon className="search-icon" />
            </StyledSearchBtn>
        </>
    );
};

export default AutocompleteForm;