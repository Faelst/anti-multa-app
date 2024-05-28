import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useDialogContext } from '@/context/dialogContext';
import { useClient } from '@/context/clientContext';

export default function AlertDialog() {
  const { client } = useClient();
  const { openDialogHomeForm, setOpenDialogHomeForm } = useDialogContext();

  const handleClose = () => {
    setOpenDialogHomeForm(false);

    window.open(
      `https://wa.me/5531987888526?text=olá%2C+meu+nome+é+${client.name}+gostaria+de+recorrer+minhas+multas%2C+segue+os+dados+do+meu+veículo%3A+PLACA%2C+${client.vehiclePlate}+CHASSI%2C+${client.chassi}`,
      '_blank'
    );
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
