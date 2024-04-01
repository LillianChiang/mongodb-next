import React from 'react';
import { Button, Typography } from '@mui/material';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
  currentData: any[]; // Update this to match the type of your data
  dataPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
  currentData,
  dataPerPage,
}) => {
  return (
    <div>
      <Button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        上一頁
      </Button>
      <Typography>
        {currentPage} / {totalPages}
      </Typography>
      <Button
        onClick={() => paginate(currentPage + 1)}
        disabled={
          currentData.length < dataPerPage || currentPage === totalPages
        }
      >
        下一頁
      </Button>
    </div>
  );
};

export default Pagination;
