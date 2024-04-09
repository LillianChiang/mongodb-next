'use client';

import React, { useState, useEffect } from 'react';
import { TextField, Container, Grid, Button } from '@mui/material';

interface ClientData {
  ID: number;
  name: string;
  IdNumber: string;
  Gender: string;
  birthday: string;
  phone: string;
  mobile: string;
}

const EditClient = () => {
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [clientId, setClientId] = useState<number | null>(1);

  useEffect(() => {
    if (!clientId) return;
    fetch('clients.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data: { clients: ClientData[] }) => {
        const client = data.clients.find((client) => client.ID === clientId);
        if (client) {
          setClientData(client);
        } else {
          setError('Client not found');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching client data:', error);
        setError('Error fetching client data');
        setLoading(false);
      });
  }, [clientId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ClientData,
  ) => {
    if (clientData) {
      setClientData({ ...clientData, [field]: e.target.value });
    }
  };

  const handleSaveClick = () => {
    // Handle saving client data, for example, sending it to a server
    console.log('Saving client data:', clientData);
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
      <h1>Edit Client</h1>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Client ID"
              value={clientData.ID.toString()}
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Name"
              value={clientData['name']}
              fullWidth
              onChange={(e) => handleInputChange(e, 'name')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Id Number"
              value={clientData['IdNumber']}
              fullWidth
              onChange={(e) => handleInputChange(e, 'IdNumber')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Gender"
              value={clientData['Gender']}
              fullWidth
              onChange={(e) => handleInputChange(e, 'Gender')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone"
              value={clientData['phone']}
              fullWidth
              onChange={(e) => handleInputChange(e, 'phone')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Mobile"
              value={clientData['mobile']}
              fullWidth
              onChange={(e) => handleInputChange(e, 'mobile')}
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
  );
};

export default EditClient;
