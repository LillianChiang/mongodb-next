import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

interface Client {
  ID: number;
  姓名: string;
  證件號碼: string;
  性別: string;
  生日: string;
  電話號碼: string;
  手機號碼: string;
}

// Prop type for ClientList component
interface ClientListProps {
  currentData: Client[]; // Specify currentData as an array of Client objects
}

const ClientList: React.FC<ClientListProps> = ({ currentData }) => {
  return (
    <Paper
      elevation={3}
      style={{ backgroundColor: 'lightblue', padding: '10px' }}
    >
      <Grid container spacing={2}>
        {currentData.map((client) => (
          <Grid key={client.ID} item xs={6}>
            <ul>
              <li>
                <Typography>ID: {client.ID}</Typography>
                <Typography>姓名: {client['姓名']}</Typography>
                {/* Assuming these properties exist in the Client interface */}
                {/* Make sure to replace 'ID Number' with actual property name */}
                <Typography>證件號碼: {client['證件號碼']}</Typography>
                <Typography>性別: {client['性別']}</Typography>
                <Typography>生日: {client['生日']}</Typography>
                <Typography>電話號碼: {client['電話號碼']}</Typography>
                <Typography>手機號碼: {client['手機號碼']}</Typography>
              </li>
            </ul>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ClientList;
