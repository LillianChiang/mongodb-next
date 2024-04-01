import React from 'react';
import { Select, MenuItem, TextField, Button } from '@mui/material';

interface SearchBarProps {
  searchCriteria: string;
  setSearchCriteria: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchCriteria,
  setSearchCriteria,
  searchQuery,
  setSearchQuery,
  handleSearch,
  isLoading,
}) => {
  return (
    <div className="search-container flex">
      <Select
        variant="outlined"
        className="mr-2 resize-y rounded border border-gray-300 p-2"
        value={searchCriteria}
        onChange={(e) => setSearchCriteria(e.target.value as string)}
      >
        <MenuItem value="patientID">病歷號碼</MenuItem>
        <MenuItem value="name">姓名</MenuItem>
        <MenuItem value="phoneNumber">電話號碼</MenuItem>
      </Select>
      <TextField
        variant="outlined"
        type="text"
        placeholder={`輸入${
          searchCriteria === 'patientID'
            ? '病歷號碼'
            : searchCriteria === 'name'
              ? '姓名'
              : '電話號碼'
        }`}
        className="resize-y rounded border border-gray-300 p-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className="rounded bg-blue-600 px-5 py-5 text-white"
        onClick={handleSearch}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : '搜尋'}
      </Button>
    </div>
  );
};

export default SearchBar;
