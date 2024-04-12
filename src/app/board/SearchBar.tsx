import React from 'react';
import { TextField, Button } from '@mui/material';

interface SearchBarProps {
  searchCriteria: string;
  setSearchCriteria: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  isLoading: boolean;
  openAlert: boolean;
  handleCloseAlert: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchCriteria,
  searchQuery,
  setSearchQuery,
  handleSearch,
  isLoading,
}) => {
  return (
    <div className="search-container flex">
      <TextField
        variant="outlined"
        type="text"
        placeholder={`輸入關鍵字${
          searchCriteria === 'patientID'
            ? ' '
            : searchCriteria === 'name'
              ? ' '
              : ' '
        }`}
        className="resize-y rounded p-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className="my-2 rounded bg-blue-600 text-white "
        onClick={handleSearch}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : '搜尋'}
      </Button>
    </div>
  );
};

export default SearchBar;
