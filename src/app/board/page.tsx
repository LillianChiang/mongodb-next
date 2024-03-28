'use client';

import { useState } from 'react';
// import Clients from '../clientData/Clients';
import Clients from '../components/ClientSearchResult';
import PaginationDemo from '../components/Pagination';
import personalInfo from '../../mock/personalInfo.json';
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
} from '@material-ui/core';

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

  const handleCloseAlert = (
    event: React.SyntheticEvent | MouseEvent,
    reason: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8; // 每頁顯示筆數
  const totalPages = Math.ceil(personalInfo.length / usersPerPage);

  // 換頁
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={12} md={9}>
            <div className="main-content">
              <Typography variant="h4">病歷查詢</Typography>
              <div className="search-container flex">
                <Select
                  variant="outlined"
                  className="mr-2 resize-y rounded border border-gray-300 p-2"
                >
                  <MenuItem value="patientID">病歷號碼</MenuItem>
                  <MenuItem value="name">姓名</MenuItem>
                  <MenuItem value="phoneNumber">電話號碼</MenuItem>
                </Select>
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="輸入關鍵字"
                  className="resize-y rounded border border-gray-300 p-2"
                />

                <Button
                  variant="contained"
                  color="primary"
                  className="rounded bg-blue-600 px-5 py-5 text-white"
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
            <Clients />
          </Grid>
        </Grid>
        <div className="flex justify-center">
          <PaginationDemo
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </Container>
    </Navbar>
  );
};
export default Page;
