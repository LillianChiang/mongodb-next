import { useState } from 'react';
import { Button, Snackbar } from '@material-ui/core';
import { useRouter } from 'next/navigation';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

const MyComponent = () => {
  const [openAlert, setOpenAlert] = useState(true);
  const router = useRouter();
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const resetSearch = () => {
    setOpenAlert(false); // Close the alert after resetting search
  };

  const handleNoButtonClick = () => {
    router.push('/treatmentForm');
  };

  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={6000}
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      message="Are you sure you want to delete it?"
      action={
        <>
          <Button color="secondary" size="small" onClick={resetSearch}>
            Yes
          </Button>
          <ErrorOutlineRoundedIcon fontSize="small" style={{ marginLeft: 8 }} />
          <Button color="secondary" size="small" onClick={handleNoButtonClick}>
            No
          </Button>
        </>
      }
    />
  );
};

export default MyComponent;
