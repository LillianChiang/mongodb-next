import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import personalInfo from '../../../mock/personalInfo.json';
import Pagination from '../CustomerPagination';

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
  const currentClients = personalInfo.slice(indexOfFirst, indexOfLast);

  // 換頁
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mb-4 rounded-lg border-2 border-dashed border-gray-300 p-3">
      <h1 className="mb-4 text-2xl">Clients Information</h1>
      <div className="flex flex-wrap items-center justify-center">
        {currentClients.map((item) => (
          <React.Fragment key={item.id}>
            <div className="m-2 min-w-[400px] space-y-1 rounded-md bg-[#DDE9FD] p-2 shadow-md">
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
              <div>
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
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
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
