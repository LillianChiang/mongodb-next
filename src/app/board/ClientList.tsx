'use client';

import React, { useState } from 'react';
import { Paper, Grid, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import clients from '../../../../move-for-healthpt-next/public/clients.json';
import Pagination from './Pagination';

interface Client {
  ID: number;
  姓名: string;
  證件號碼: string;
  性別: string;
  生日: string;
  電話號碼: string;
  手機號碼: string;
}

interface ClientListProps {
  currentData: Client[];
}

const ClientList: React.FC<ClientListProps> = ({ currentData }) => {
  const router = useRouter();

  const handleAddClient = () => {
    router.push('/treatmentForm');
  };

  const handleEditClient = (clientId: number) => {
    router.push(`/editTreatmentForm/${clientId}`);
  };

  const handleViewInfo = (clientId: number) => {
    // Logic for viewing detailed information of a client
  };

  const handleDeleteClient = (clientId: number) => {
    // Logic for deleting a client
  };

  const [currentPage, setCurrentPage] = useState(1);
  const clientPerPage = 10; // 每頁顯示筆數
  const totalPages = Math.ceil(currentData.length / clientPerPage);
  // 根據目前頁數，計算要顯示的使用者數據
  const indexOfLast = currentPage * clientPerPage;
  const indexOfFirst = indexOfLast - clientPerPage;
  const currentClients = currentData.slice(indexOfFirst, indexOfLast);


  // 換頁
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Paper elevation={3} style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      <Grid container spacing={2}>
        {currentData.map((client) => (
          <Grid key={client.ID} item xs={6}>
            <ul>
              <li>
                <Typography>ID: {client.ID}</Typography>
                <Typography>姓名: {client['姓名']}</Typography>
                <Typography>證件號碼: {client['證件號碼']}</Typography>
                <Typography>性別: {client['性別']}</Typography>
                <Typography>生日: {client['生日']}</Typography>
                <Typography>電話號碼: {client['電話號碼']}</Typography>
                <Typography>手機號碼: {client['手機號碼']}</Typography>
                <Button onClick={handleAddClient}>Add </Button>
                <Button onClick={() => handleEditClient(client.ID)}>Edit</Button>
                <Button onClick={() => handleViewInfo(client.ID)}>View</Button>
                <Button onClick={() => handleDeleteClient(client.ID)}>Delete</Button>
              </li>
            </ul>
          </Grid>
        ))}
      </Grid>
      <div className="flex justify-center">
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  </div>
    </Paper>
   
  );
};

export default ClientList;
