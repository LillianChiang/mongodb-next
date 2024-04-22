
'use client'
import { useEffect, useState } from 'react';

type Client = {
  id: number;
  name: string;
  // other properties
};

interface ClientDetailsProps {
  params: { clientId: string };
  clientDetails?: {
    name: string;
    idNumber: string;
    gender: string;
    phone: string;
    mobile: string;
  };
}

const ViewClient: React.FC<ClientDetailsProps> = ({ params, clientDetails }) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch('/clients.json')
      .then(response => response.json())
      .then(data => {
        setClients(data.clients);
        setLoading(false);
      })
      .catch(error => console.error('Failed to load clients', error));
  }, []);

  if (loading) return <p>Loading clients...</p>;

  const { clientId } = params;

  const selectedClient = clients.find(client => client.id.toString() === clientId);

  if (!selectedClient) {
    return <p>Client not found</p>;
  }

  return (
    <div>
      <h1>Client Details</h1>
      <p>Name: {selectedClient.name}</p>
      {/* Render other client details here */}
    </div>
  );
};


export default ViewClient;
