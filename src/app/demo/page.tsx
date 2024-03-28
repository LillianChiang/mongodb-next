'use client';

import React, { useState } from 'react';
import PaginationDemo from '../components/Pagination';
import personalINfo from '../../mock/personalInfo.json';

// client information card
const UserInfo: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div className="m-2 min-w-[400px] space-y-1 bg-[#DDE9FD] p-2 shadow-md">
      <React.Fragment key={item.id}>
        <div className="grid grid-cols-4">
          <span className="col-span-1">ID:</span>
          <span className="col-span-3">{item.id}</span>
        </div>
        <div className="grid grid-cols-4">
          <span className="col-span-1">姓名:</span>
          <span className="col-span-3">{item.name}</span>
        </div>
        <div className="grid grid-cols-4">
          <span className="col-span-1">ID Number:</span>
          <span className="col-span-3">{item.idNumber}</span>
        </div>
        <div className="grid grid-cols-4">
          <span className="col-span-1">Gender:</span>
          <span className="col-span-3">{item.gender}</span>
        </div>
        <div className="grid grid-cols-4">
          <span className="col-span-1">生日:</span>
          <span className="col-span-3">{item.birthday}</span>
        </div>
        <div className="grid grid-cols-4">
          <span className="col-span-1">電話號碼:</span>
          <span className="col-span-3">{item.phoneNumber}</span>
        </div>
        <div className="grid grid-cols-4">
          <span className="col-span-1">手機號碼:</span>
          <span className="col-span-3">{item.mobileNumber}</span>
        </div>
        {/* <div>
                <button
                  onClick={handleAddClient}
                  className="bg-yellow mr-2 rounded-md px-2 py-1"
                >
                  Add
                </button>
                <button
                  onClick={handleEditClient}
                  className="bg-blue mr-2 rounded-md px-2 py-1"
                >
                  Edit
                </button>
                <button
                  onClick={handleViewInfo}
                  className="bg-pink mr-2 rounded-md px-2 py-1"
                >
                  View Info
                </button>
                <button
                  onClick={handleDeleteClient}
                  className="bg-green rounded-md px-2 py-1"
                >
                  Delete
                </button>
              </div> */}
      </React.Fragment>
    </div>
  );
};

const demo: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8; // 每頁顯示筆數
  const totalPages = Math.ceil(personalINfo.length / usersPerPage);

  // 根據目前頁數，計算要顯示的使用者數據
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = personalINfo.slice(indexOfFirstUser, indexOfLastUser);

  // 換頁
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-[1000px]">
      <div className="flex flex-wrap items-center justify-center">
        {/* currentUsers */}
        {currentUsers.map((item: any) => (
          <UserInfo key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <PaginationDemo
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default demo;
