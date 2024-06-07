import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from 'next-themes';

const colorRed = '#EC0000';
export const CustomTextField = styled(TextField)(({ theme }) => {
  const { theme: nextTheme } = useTheme();
  const color = nextTheme === 'dark' ? '#FFFFFF' : '#666666';
  const colorImportant = 'rgba(0, 0, 0, 0.38) !important';

  return {
    '& .MuiInputBase-input': {
      fontSize: '16px',
      padding: '14px',
      height: '56px',
      boxSizing: 'border-box',
      color: nextTheme === 'dark' ? '#FFFFFF' : '#373737',
      '&::placeholder': {
        fontSize: '14px',
        color,
        opacity: 1
      }
    },
    '& .Mui-disabled': {
      color: colorImportant,
      '& .MuiSvgIcon-root': {
        color: colorImportant
      }
    },
    '& .MuiSvgIcon-root': {
      color: colorRed,
      fontSize: '25px'
    },
    '& .MuiFormLabel-root': {
      fontSize: '16px',
      color
    },
    '& MuiInputBase-root-MuiOutlinedInput-root.Mui-error ': {
      border: `2px solid ${theme.palette.error.dark}`
    },
    '& .MuiFormHelperText-root': {
      fontSize: '14px',
      color: colorRed
    },
    '& .MuiFormLabel-asterisk': {
      color: colorRed
    },
    '& label.Mui-focused': {
      color: colorRed
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: colorRed
      }
    }
  };
});
