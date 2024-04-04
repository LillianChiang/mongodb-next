
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Pagination from '../CustomerPagination';
import personalInfo from '../../../mock/personalInfo.json';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

// Define the type for the items in personalInfo array
interface ClientInfo {
  id: number;
  name: string;
  idNumber: string;
  gender: string;
  birthday: string;
  phoneNumber: string;
  mobileNumber: string;
}

export default function ClientSearchResult() {
  
  const router = useRouter();

  const handleAddClient = () => {
    router.push('/treatmentForm');
  };

  const handleEditClient = () => {
    router.push('/editTreatmentForm');
  };

  const handleViewInfo = () => {
    // Logic for viewing detailed information of a client
  };

  const handleDeleteClient = () => {
    // Logic for deleting a client
  };

  const [currentPage, setCurrentPage] = useState(1);
  const clientPerPage = 10; // 每頁顯示筆數
  const totalPages = Math.ceil(personalInfo.length / clientPerPage);
  // 根據目前頁數，計算要顯示的使用者數據
  const indexOfLast = currentPage * clientPerPage;
  const indexOfFirst = indexOfLast - clientPerPage;
  const currentClients: ClientInfo[] = personalInfo.slice(indexOfFirst, indexOfLast); // Explicitly define type

  // 換頁
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mb-4 rounded-lg border-2 border-dashed border-gray-300 p-3">
      <h1 className="mb-4 text-2xl">Clients Information</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>姓名</TableCell>
            <TableCell>ID Number</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>生日</TableCell>
            <TableCell>電話號碼</TableCell>
            <TableCell>手機號碼</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentClients.map((item: ClientInfo) => ( // Specify type here
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.idNumber}</TableCell>
              <TableCell>{item.gender}</TableCell>
              <TableCell>{item.birthday}</TableCell>
              <TableCell>{item.phoneNumber}</TableCell>
              <TableCell>{item.mobileNumber}</TableCell>
              <TableCell>
                <Button onClick={handleAddClient} variant="contained" color="warning" className="mr-2">
                  Add
                </Button>
                <Button onClick={handleEditClient} variant="contained" color="primary" className="mr-2">
                  Edit
                </Button>
                <Button onClick={handleViewInfo} variant="contained" color="secondary" className="mr-2">
                  View Info
                </Button>
                <Button onClick={handleDeleteClient} variant="contained" color="success">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );

}
