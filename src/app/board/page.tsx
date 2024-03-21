'use client';

import { useState } from 'react';
import Clients from '../clientData/Clients';

import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Select,
  MenuItem,
} from '@material-ui/core';

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [records, setRecords] = useState([]);

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate a search operation (replace this with your actual search logic)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after search operation
      setRecords([]); // Set the records with the search results
    }, 2000);
  };

  const resetSearch = () => {
    setRecords([]); // Reset noRecords state when performing a new search
  };

  return (
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
                className="rounded bg-blue-600 px-4 py-2 text-white"
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
            {records.length === 0 && (
              <div className="mt-2 text-red-500">
                opps, no records
                <Button className="ml-2" onClick={resetSearch}>
                  Try Again
                </Button>
              </div>
            )}
          </div>
          <Clients />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;
