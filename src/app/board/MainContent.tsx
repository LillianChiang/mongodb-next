import React from 'react';
import { Typography, Container } from '@material-ui/core';
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
  paginate: (pageNumber: number) => void;
  dataPerPage: number;
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
  paginate,
  dataPerPage,
}) => {
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
      <Typography variant="h4">Client Board</Typography>
      <ClientList currentData={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        currentData={currentData}
        dataPerPage={dataPerPage}
      />
    </Container>
  );
};

export default MainContent;
