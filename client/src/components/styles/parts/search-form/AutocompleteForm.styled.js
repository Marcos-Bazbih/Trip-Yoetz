import styled from "styled-components";
import Autocomplete from '@mui/material/Autocomplete';

export const StyledAutocompleteForm = styled(Autocomplete)`
    width: 75%;
    background-color: rgba(0, 0, 0, 0.2);

    .MuiAutocomplete-popupIndicator,
    .MuiAutocomplete-clearIndicator{
        color: ${({ mode }) => mode.color};
    }
    fieldset{
        border: 2px solid ${({ mode }) => mode.color} !important;
    }
    input{
        color: ${({ mode }) => mode.color};
        font-size: 1.2rem;
        font-weight: bold;
    }
    .label-icon{
        color: ${({ mode }) => mode.color};
        background: transparent;
    }
`;