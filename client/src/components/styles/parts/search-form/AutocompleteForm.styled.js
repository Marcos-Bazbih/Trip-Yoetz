import styled from "styled-components";
import Autocomplete from '@mui/material/Autocomplete';

export const StyledAutocompleteForm = styled(Autocomplete)`
    .MuiAutocomplete-popupIndicator,
    .MuiAutocomplete-clearIndicator{
        color: ${({ mode }) => mode.color};
    }
    fieldset{
        border: 2px solid ${({ mode }) => mode.color} !important;
    }
    input{
        background: ${({ mode }) => mode.background};
        color: ${({ mode }) => mode.color};
        font-size: 1.2rem;
        font-weight: bold;
    }
    .label-icon{
        color: ${({ mode }) => mode.color};
        background: transparent;
    }
`;