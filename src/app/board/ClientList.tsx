'use client';

import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
  TablePagination,
} from '@mui/material';
import { useRouter } from 'next/navigation';


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
  const clientPerPage = 10;
  const totalPages = Math.ceil(currentData.length / clientPerPage);

  const indexOfLast = currentPage * clientPerPage;
  const indexOfFirst = indexOfLast - clientPerPage;
  const currentClients = currentData.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Paper elevation={3} style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>姓名</TableCell>
              <TableCell>證件號碼</TableCell>
              <TableCell>性別</TableCell>
              <TableCell>生日</TableCell>
              <TableCell>電話號碼</TableCell>
              <TableCell>手機號碼</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentClients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.id}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.idNumber}</TableCell>
                <TableCell>{client.gender}</TableCell>
                <TableCell>{client.birthday}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.mobile}</TableCell>
                <TableCell>
                  <Button onClick={handleAddClient}>Add</Button>
                  <Button onClick={() => handleEditClient(client.id)}>Edit</Button>
                  <Button onClick={() => handleViewInfo(client.id)}>View</Button>
                  <Button onClick={() => handleDeleteClient(client.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={currentData.length}
        rowsPerPage={clientPerPage}
        page={currentPage - 1}
        onPageChange={(_, page) => handlePageChange(page + 1)}
      />
    </Paper>
  );
};

export default ClientList;
