'use client';
import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core';

interface Entry {
  date: string;
  therapist: string;
  treatment_type: string;
  assessment_content: string;
  treatment_content: string;
  cash_fees: number;
  prepaid: boolean;
  remarks: string;
}

interface Record {
  id: number;
  entries: Entry[];
}

interface RecordDetailsProps {
  params: { recordId: string };
}

const ViewRecord: React.FC<RecordDetailsProps> = ({ params }) => {
  const [records, setRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState<Record | undefined>();
  const [editedRecord, setEditedRecord] = useState<Partial<Entry>>({});
  const [recordIndex, setRecordIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch('/records.json')
      .then((response) => response.json())
      .then((data) => {
        setRecords(data.records);
        const foundRecord = data.records.find(
          (rec: Record) => rec.id.toString() === params.recordId,
        );
        setSelectedRecord(foundRecord);
        setEditedRecord(foundRecord ? foundRecord.entries[0] : {});
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to load records', error);
        setLoading(false);
      });
  }, [params.recordId]);

  const handleInputChange = (
    field: keyof Entry,
    value: string | number | boolean
  ) => {
    setEditedRecord((prev) => ({ ...prev, [field]: value }));
  };

  const handleTableClick = (index: number) => {
    setRecordIndex(index);
  };

  const handleSaveClick = () => {
    console.log('Record details saved:', editedRecord);
  };

  if (loading) return <Typography>Loading records...</Typography>;
  if (!selectedRecord) return <Typography>Record not found</Typography>;

  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: 10, marginBottom: 10 }}>
        Record Details
      </Typography>

      {selectedRecord.entries.map((entry: Entry, index: number) => (
        <Paper key={index} elevation={3} style={{ marginBottom: 10, padding: 2 }}>
          <Typography variant="h6">Record {index + 1}</Typography>
          <Table>
            <TableBody>
            <TableRow key={selectedRecord.id} onClick={() => handleTableClick(index)}>
                <TableCell component="th" scope="row">
                  Date: {entry.date}
                </TableCell>
                <TableCell>Therapist: {entry.therapist}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      ))}
{recordIndex !== null && records && (
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Record ID"
              value={selectedRecord.id}
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="date"
              value={records[recordIndex].entries[recordIndex].date}
              fullWidth
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange('date', e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
                <TextField
                  label="therapist"
                  value={records[recordIndex].entries[recordIndex].therapist}
                  fullWidth
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange('therapist', e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="treatment_type"
                  value={records[recordIndex].entries[recordIndex].treatment_type}
                  fullWidth
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange('treatment_type', e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="assessment_content"
                  value={records[recordIndex].entries[recordIndex].assessment_content}
                  fullWidth
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange('assessment_content', e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="treatment_content"
                  value={records[recordIndex].entries[recordIndex].treatment_content}
                  fullWidth
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange('treatment_content', e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="cash_fees"
                  value={records[recordIndex].entries[recordIndex].cash_fees}
                  fullWidth
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange('cash_fees', e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="prepaid"
                  value={records[recordIndex].entries[recordIndex].prepaid ? 'Yes' : 'No'}
                  fullWidth
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange('prepaid', e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="remarks"
                  value={records[recordIndex].entries[recordIndex].remarks}
                  fullWidth
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange('remarks', e.target.value)}
                />
              </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSaveClick}>
              SAVE
            </Button>
          </Grid>
        </Grid>
      </form>
      )}
    </Container>
  );
};

export default ViewRecord;
