import { CircularProgress, Grid } from '@mui/material';

export const LoadingSpinner: React.FC = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" paddingTop={5}>
      <CircularProgress color="error" size={50} />
    </Grid>
  );
};
