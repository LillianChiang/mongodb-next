import React from 'react';
import Pagination from '@mui/material/Pagination';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  dataPerPage: number; 
}

export default function CustomerPagination({
  totalPages,
  currentPage,
  onPageChange
}: PaginationProps) {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <Pagination
      count={totalPages}  // Using 'count' instead of 'totalPages'
      page={currentPage}  // Using 'page' instead of 'currentPage'
      onChange={handleChange}  // Using 'onChange' instead of 'onPageChange'
    />
  );
}




