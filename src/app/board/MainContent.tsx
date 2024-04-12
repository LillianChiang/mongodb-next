import React from 'react';
import { Typography, Container } from '@mui/material';
import SearchBar from './SearchBar';
import Alert from './Alert';
import ClientList from './ClientList';

interface MainContentProps {
  searchCriteria: string;
  setSearchCriteria: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  resetSearch: () => void;
  isLoading: boolean;
  openAlert: boolean;
  handleCloseAlert: () => void;
  currentData: any[];
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
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

  onPageChange, // Include onPageChange prop in the component
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
        openAlert={openAlert}
        handleCloseAlert={handleCloseAlert}
      />
      <Alert openAlert={openAlert} handleCloseAlert={handleCloseAlert} />

      <ClientList currentData={currentData} />
    </Container>
  );
};

export default MainContent;
