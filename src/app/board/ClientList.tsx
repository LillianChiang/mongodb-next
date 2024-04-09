'use client';

import React, { useState } from 'react';
import { Paper, Grid, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import Pagination from './Pagination';

enum gender {
  Male = 'male',
  Female = 'female',
}
interface Client {
  id: number;
  name: string;
  idNumber: string;
  gender: gender;
  birthday: string;
  phone: string;
  mobile: string;
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
    router.push('/editTreatmentForm');
  };

  const handleViewInfo = (clientId: number) => {
    router.push('/viewTreatmentForm');
  };

  const handleDeleteClient = (clientId: number) => {
    router.push('/deleteTreatmentForm');
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
    <Paper
      elevation={3}
      style={{ backgroundColor: 'lightblue', padding: '10px' }}
    >
      <Grid container spacing={2}>
        {currentData.map((client) => (
          <Grid key={client.id} item xs={6}>
            <Box border={5} borderColor="white" borderRadius={8} padding={2}>
              <ul>
                <li>
                  <Typography>ID: {client.id}</Typography>
                  <Typography>姓名: {client['name']}</Typography>
                  <Typography>證件號碼: {client['idNumber']}</Typography>
                  <Typography>性別: {client['gender']}</Typography>
                  <Typography>生日: {client['birthday']}</Typography>
                  <Typography>電話號碼: {client['phone']}</Typography>
                  <Typography>手機號碼: {client['mobile']}</Typography>
                  <Button onClick={handleAddClient}>Add </Button>
                  <Button onClick={() => handleEditClient(client.id)}>
                    Edit
                  </Button>
                  <Button onClick={() => handleViewInfo(client.id)}>
                    View
                  </Button>
                  <Button onClick={() => handleDeleteClient(client.id)}>
                    Delete
                  </Button>
                </li>
              </ul>
            </Box>
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
