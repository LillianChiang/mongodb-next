import React from 'react';
import { Snackbar, Button } from '@mui/material';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

interface AlertProps {
  openAlert: boolean;
  handleCloseAlert: () => void;
}

const Alert: React.FC<AlertProps> = ({ openAlert, handleCloseAlert }) => {
  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={5000}
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      message="Oops, 查無符合資料"
      action={
        <>
          <Button color="secondary" size="small" onClick={handleCloseAlert}>
            ok
          </Button>
          <ErrorOutlineRoundedIcon fontSize="small" style={{ marginLeft: 8 }} />
        </>
      }
    />
  );
};

export default Alert;
