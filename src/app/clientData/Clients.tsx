import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

const Clients = () => {
  const router = useRouter();
  const [clients, setClients] = useState([
    {
      id: 1,
      name: 'John Doe',
      idNumber: '1234567890',
      gender: 'Male',
      birthday: '1990-01-01',
      phoneNumber: '123-456-7890',
      mobileNumber: '098-765-4321',
    },
    // Add more client objects as needed
  ]);

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
    router.push('/deleteTreatmentForm');
  };

  // Reverse the order of the clients array
  const reversedClients = [...clients].reverse();

  return (
    <div className="w-3/4 rounded-lg bg-purple-100 p-6">
      <h1 className="mb-4 text-2xl">Clients Information</h1>
      <table className="mb-4 w-3/4">
        <tbody>
          {reversedClients.map((client) => (
            <React.Fragment key={client.id}>
              <tr>
                <td>ID:</td>
                <td>{client.id}</td>
              </tr>
              <tr>
                <td>姓名:</td>
                <td>{client.name}</td>
              </tr>
              <tr>
                <td>ID Number:</td>
                <td>{client.idNumber}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{client.gender}</td>
              </tr>
              <tr>
                <td>生日:</td>
                <td>{client.birthday}</td>
              </tr>
              <tr>
                <td>電話號碼:</td>
                <td>{client.phoneNumber}</td>
              </tr>
              <tr>
                <td>手機號碼:</td>
                <td>{client.mobileNumber}</td>
              </tr>
              <tr>
                <td>
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
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
