'use client';
import React, { useState, useEffect } from 'react';
import { TextField, Container, Grid, Button } from '@mui/material';

interface ClientData {
  ID: number;
  name: string;
  'ID Number': string;
  Gender: string;
  birthday: string;
  phone: string;
  mobile: string;
 
}

const EditClient = () => {
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [clientName, setClientName] = useState('');
  const [IdNumber, setIdNumber] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    fetch('clients.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data) => {
        if (data.clients && data.clients.length > 0) {
          const firstClient = data.clients[0];
          setClientData(firstClient);
          setClientName(firstClient['name']);
          setIdNumber(firstClient['ID Number']);
          setGender(firstClient.Gender);
          setPhone(firstClient['電話號碼']);
          setMobile(firstClient['手機號碼']);
        } else {
          setError('No client data found');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching client data:', error);
        setError('Error fetching client data');
        setLoading(false);
      });
  }, []);

  const handleEdit = (event: React.FormEvent<HTMLFormElement>) => {
    // Handle the edit action here
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
      <form onSubmit={handleEdit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Client ID"
              value={clientData.ID.toString()}
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Name"
              value={clientData['name']}
              onChange={(e) => setClientData({...clientData, name: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="ID Number"
              value={clientData['ID Number']}
              onChange={(e) => setIdNumber(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Gender"
              value={clientData['Gender']}
              onChange={(e) => setGender(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone"
              value={clientData['電話號碼']}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Mobile"
              value={clientData['手機號碼']}
              onChange={(e) => setMobile(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EditClient;
