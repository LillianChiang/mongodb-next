'use client'
import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material/';

type Client = {
  id: number;
  name: string;
    idNumber: string;
    gender: string;
    phone: string;
    mobile: string;
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

const EditClient: React.FC<ClientDetailsProps> = ({ params, clientDetails }) => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
  }

  const handleSaveClick = () => {
    // Handle saving client data here
  };


  return (
    <div>
    <Container>
    <h1>Edit Client</h1>
    <form>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Client ID"
            value={params.clientId}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Name"
            value={selectedClient.name}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'name')}
            
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Id Number"
            value={selectedClient.idNumber}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'idNumber')}
            
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Gender"
            value={selectedClient.gender}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'gender')}
            
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone"
            value={selectedClient.phone}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'phone')}
            
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Mobile"
            value={selectedClient.mobile}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'mobile')}
            
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSaveClick}>
            SAVE
          </Button>
        </Grid>
      </Grid>
    </form>
  </Container>
  </div>
);
};

export default EditClient;
