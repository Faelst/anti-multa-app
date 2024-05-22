import { alpha, styled } from '@mui/material/styles';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useTheme } from 'next-themes';

const colorRed = '#EC0000';
const colorDisabled = '#CCCCCC';
export const StyledFormControlLabel = styled(FormControlLabel)(() => {
  const { theme: nextTheme } = useTheme();
  const color = nextTheme === 'dark' ? '#FFFFFFB2' : '#111827';
  return {
    '& .MuiFormControlLabel-label': {
      fontSize: '16px',
      lineHeight: 1.2,
      color,
      '&.Mui-disabled': {
        color: colorDisabled
      }
    }
  };
});

export const StyledCheckbox = styled(Checkbox)(({ theme, size }) => ({
  padding: size === 'small' ? '6.675px' : '8px',
  margin: size === 'small' ? '3px' : undefined,
  '& .MuiSvgIcon-root': {
    borderRadius: '6px',
    fontSize: '24px',
    '&.MuiSvgIcon-fontSizeSmall': {
      fontSize: '18.67px'
    }
  },
  '&.Mui-disabled': {
    color: colorDisabled
  },
  '&:not(.Mui-disabled)': {
    '&.Mui-checked, &.MuiCheckbox-indeterminate': {
      '&.MuiCheckbox-colorPrimary': {
        color: colorRed,
        '&:hover': {
          backgroundColor: alpha(colorRed, 0.05)
        }
      },
      '&.MuiCheckbox-colorSecondary': {
        color: theme.palette.error.light,
        '&:hover': {
          backgroundColor: alpha(theme.palette.error.light, 0.08)
        }
      }
    }
  },
  '&.Mui-checked': {
    '&, & + .MuiFormControlLabel-label': {
      color: '#b91c1c'
    }
  }
}));
