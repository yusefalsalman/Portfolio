import React, { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function AutohideSnackbar({ openSnack, onClose }) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (openSnack.open) {
      setOpen(true);
    }
  }, [openSnack]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    if (onClose) onClose();
  };

  return (
    <div className="">
      <Snackbar
        sx={{
          '& .MuiSnackbarContent-root': {
            backgroundColor: 'green',
          },
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={openSnack.message}
      />
    </div>
  );
}
