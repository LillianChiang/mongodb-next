'use client';

import React, { useState, useEffect } from 'react';
import { TextField, Container, Grid, Button } from '@mui/material';

interface ClientData {
  ID: number;
  name: string;
  IdNumber: string;
  Gender: string;
  birthday: string;
  phoneNumber: string;
  mobileNumber: string;
}

const ViewClient = () => {
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('clients.json') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data: { clients: ClientData[] }) => {
        setClientData(data.clients[0]); // Displaying only the first client data initially
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching client data:', error);
        setError('Error fetching client data');
        setLoading(false);
      });
  }, []);

  const handleViewClick = (selectedClient: ClientData) => {
    setClientData(selectedClient);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!clientData) {
    return <div>No client data available</div>;
  }

  return (
    <Container>
      <h1>View Client</h1>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="Client ID" value={clientData.ID.toString()} fullWidth disabled />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Name" value={clientData['name']} fullWidth disabled />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Id Number" value={clientData['IdNumber']} fullWidth disabled />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Gender" value={clientData['Gender']} fullWidth disabled />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Phone" value={clientData['phoneNumber']} fullWidth disabled />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Mobile" value={clientData['mobileNumber']} fullWidth disabled />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={() => handleViewClick(clientData)}>View</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default ViewClient;
