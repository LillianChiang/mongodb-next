import React from 'react';
import { Typography, Container } from '@mui/material';
import SearchBar from './SearchBar';
import Alert from './Alert';
import ClientList from './ClientList';
import Pagination from './Pagination';

interface MainContentProps {
  searchCriteria: string;
  setSearchCriteria: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  isLoading: boolean;
  openAlert: boolean;
  handleCloseAlert: () => void;
  currentData: any[]; // Update this to match the type of your data
  currentPage: number;
  totalPages: number;
  dataPerPage: number;
  onPageChange: (page: number) => void; 
}

const MainContent: React.FC<MainContentProps> = ({
  searchCriteria,
  setSearchCriteria,
  searchQuery,
  setSearchQuery,
  handleSearch,
  isLoading,
  openAlert,
  handleCloseAlert,
  currentData,
  currentPage,
  totalPages,
  dataPerPage,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page); // Call onPageChange prop with the page number
  };

  return (
    <Container>
      <Typography variant="h4">病歷查詢</Typography>
      <SearchBar
        searchCriteria={searchCriteria}
        setSearchCriteria={setSearchCriteria}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        isLoading={isLoading}
      />
      <Alert openAlert={openAlert} handleCloseAlert={handleCloseAlert} />
 
      <ClientList currentData={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        dataPerPage={dataPerPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default MainContent;
