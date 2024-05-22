import { styled } from '@mui/material/styles';
import { Autocomplete } from '@mui/material';

export const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiAutocomplete-inputRoot': {
    paddingTop: '0px',
    paddingBottom: '0px'
  }
}));
