'use client';


import React, { useEffect, useState } from 'react';

import ClientSearchResult from '../components/ClientSearchResult';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

import Navbar from '../components/DefaultLayout';
import MainContent from './MainContent';

const Page: React.FC<{ jsonData: any }> = ({ jsonData }) => {
  const [clients, setClients] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchCriteria, setSearchCriteria] = useState<string>('patientID'); // Default search criteria
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const dataPerPage: number = 6; // display 6 data in each page
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const filteredClients = clients.filter((client) => {
        return Object.values(client).some(
          (value) =>
            typeof value === 'string' &&
            value.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      });
      setSearchResults(filteredClients);
      setIsLoading(false);
      if (filteredClients.length === 0) {
        setOpenAlert(true); // Show popup alert if no records found
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const resetSearch = () => {
    setSearchResults([]); // Clear search results
    setOpenAlert(false); // Close alert
    setSearchQuery(''); // Clear search query
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/clients.json');
        const data = await res.json();
        setClients(data.clients);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Calculate total pages based on search results and items per page
    setTotalPages(Math.ceil(searchResults.length / dataPerPage));
  }, [searchResults, dataPerPage]);

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const currentData = searchResults.slice(startIndex, endIndex);

  return (
    <Navbar>

      <MainContent
        searchCriteria={searchCriteria}
        setSearchCriteria={setSearchCriteria}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        isLoading={isLoading}
        openAlert={openAlert}
        handleCloseAlert={handleCloseAlert}
        currentData={currentData}
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        dataPerPage={dataPerPage}
      />

    
    </Navbar>
  );
};

export default Page;
