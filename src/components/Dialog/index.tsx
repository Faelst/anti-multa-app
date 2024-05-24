import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useDialogContext } from '@/context/dialogContext';
import { useFormContext } from '../../context/formContext';

export default function AlertDialog() {
  const { openDialogHomeForm, setOpenDialogHomeForm } = useDialogContext();

  const handleClose = () => {
    setOpenDialogHomeForm(false);

    window.open(' wa.me/5531987888526', '_blank');
  };

  return (
    <React.Fragment>
      <Dialog
        open={openDialogHomeForm}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Avsio !'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Nao foi possivel realizar a consulta, por favor entre em contato com a equipe
            especializada.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Entrar em contato com a equipem especializada
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
