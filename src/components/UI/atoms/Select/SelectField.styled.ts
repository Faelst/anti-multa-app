import { styled } from '@mui/material/styles';
import { FormControl, Select } from '@mui/material';
import { useTheme } from 'next-themes';

const colorRed = '#E11D48';
export const CutomFormControl = styled(FormControl)(({ theme }) => {
  const { theme: nextTheme } = useTheme();
  const color = nextTheme === 'dark' ? '#FFFFFF' : '#666666';

  return {
    '& .MuiInputBase-input': {
      fontSize: '14px',
      padding: '14px',
      height: '56px !important',
      boxSizing: 'border-box',
      color: nextTheme === 'dark' ? '#FFFFFF' : '#373737',
      '&::placeholder': {
        fontSize: '16px',
        color: '#CCCCCC',
        opacity: 1
      }
    },
    '& .MuiFormLabel-root': {
      fontSize: '16px',
      color,
      '&.MuiInputLabel-shrink.Mui-focused': {
        color: colorRed
      },
      '&.Mui-error': {
        color: theme.palette.error.main
      }
    },
    '& .MuiFormLabel-asterisk': {
      color: colorRed,
      background: theme.palette.common.white,
      paddingRight: '7px'
    },
    '& .MuiSelect-select': {
      display: 'flex',
      alignItems: 'center'
    }
  };
});

export const CustomSelect = styled(Select)(() => ({
  '&.MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#E11D48'
    }
  }
}));
