import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import personalInfo from '../../../mock/personalInfo.json';

// client information card
const UserInfo: React.FC<{ user: any }> = ({ user }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{user.name}</h3>
      <p>ID: {user.id}</p>
      <p>ID Number: {user.idNumber}</p>
      <p>Gender: {user.gender}</p>
      <p>Birthday: {user.birthday}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Mobile Number: {user.mobileNumber}</p>
    </div>
  );
};

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
  const usersPerPage = 8; // 每頁顯示筆數
  const totalPages = Math.ceil(personalInfo.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = personalInfo.slice(indexOfFirstUser, indexOfLastUser);
  return (
    <div className="rounded-lg bg-purple-100 p-6">
      <h1 className="mb-4 text-2xl">Clients Information</h1>
      <div className="flex flex-wrap items-center justify-center">
        {currentUsers.map((item) => (
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
            </React.Fragment>
          </div>
        ))}
      </div>
    </div>
  );
}
