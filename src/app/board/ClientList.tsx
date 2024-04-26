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
  TablePagination,
} from '@mui/material';
import { useRouter } from 'next/navigation';

enum Gender {
  Male = 'male',
  Female = 'female',
}

interface Client {
  id: number;
  name: string;
  idNumber: string;
  gender: Gender;
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
    router.push(`/editTreatmentForm/${clientId}`);
  };

  const handleViewInfo = (clientId: number) => {
    router.push(`/viewTreatmentForm/${clientId}`);
  };

  const handleDeleteClient = (clientId: number) => {
    router.push(`/deleteTreatmentForm/${clientId}`);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page when changing rowsPerPage
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
            {currentData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((client) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={client.id}>
                  <TableCell>{client.id}</TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.idNumber}</TableCell>
                  <TableCell>{client.gender}</TableCell>
                  <TableCell>{client.birthday}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>{client.mobile}</TableCell>
                  <TableCell>
                    <Button onClick={handleAddClient}>Add</Button>
                    <Button onClick={() => handleEditClient(client.id)}>修改病歷</Button>
                    <Button onClick={() => handleViewInfo(client.id)}>修改個案資料</Button>
                    <Button onClick={() => handleDeleteClient(client.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 25]}
        rowsPerPage={rowsPerPage}
        count={currentData.length}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ClientList;
