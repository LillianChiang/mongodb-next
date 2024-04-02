'use client';

import { useState } from 'react';
import ClientSearchResult from '../components/ClientSearchResult';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import Navbar from '../components/DefaultLayout';

import {
  Button,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [records, setRecords] = useState<string[]>([]);
  const [openAlert, setOpenAlert] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate a search operation (replace this with your actual search logic)
    setTimeout(() => {
      setIsLoading(false);
      const searchResults: string[] = []; // Placeholder for search results
      setRecords(searchResults);
      if (searchResults.length === 0) {
        setOpenAlert(true); // Show popup alert if no records found
      }
    }, 2000);
  };

  const resetSearch = () => {
    setRecords([]); // Reset noRecords state when performing a new search
  };

  // const handleCloseAlert = (
  //   event: React.SyntheticEvent | MouseEvent,
  //   reason: string,
  // ) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpenAlert(false);
  // };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <Navbar>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid>
            <div className="main-content">
              <Typography variant="h4">病歷查詢</Typography>
              <div className="search-container my-1 flex space-x-2">
                <Select
                  variant="outlined"
                  className="my-2 w-36 resize-y rounded border border-gray-300"
                >
                  <MenuItem value="patientID">病歷號碼</MenuItem>
                  <MenuItem value="name">姓名</MenuItem>
                  <MenuItem value="phoneNumber">電話號碼</MenuItem>
                </Select>
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="輸入關鍵字"
                  className="resize-y rounded p-2"
                />

                <Button
                  variant="contained"
                  color="primary"
                  className="my-2 rounded bg-blue-600 text-white"
                  onClick={handleSearch}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    '搜尋'
                  )}
                </Button>
              </div>
              <Snackbar
                open={openAlert}
                autoHideDuration={5000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                message="Opps, 查無符合資料"
                action={
                  <>
                    <Button
                      color="secondary"
                      size="small"
                      onClick={resetSearch}
                    >
                      ok
                    </Button>
                    <ErrorOutlineRoundedIcon
                      fontSize="small"
                      style={{ marginLeft: 8 }}
                    />
                  </>
                }
              />
            </div>
            <ClientSearchResult />
          </Grid>
        </Grid>
      </Container>
    </Navbar>
  );
};
export default Page;
