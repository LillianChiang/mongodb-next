'use client';
import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';

type Record = {
  id: number;
  therapist: string;
  treatment_type: string;
  assessment_content: string;
  treatment_content: string;
  cash_fees: number;
  prepaid: boolean;
  remarks: string;
};

interface RecordDetailsProps {
  params: { recordId: string };
  recordDetails?: Record;
}

const ViewRecord: React.FC<RecordDetailsProps> = ({
  params,
  recordDetails,
}) => {
  const [records, setRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editedRecord, setEditedRecord] = useState<Record | undefined>(
    recordDetails,
  );

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch('/records.json')
      .then((response) => response.json())
      .then((data) => {
        setRecords(data.records);
        setLoading(false);
      })
      .catch((error) => console.error('Failed to load records', error));
  }, []);

  if (loading) return <p>Loading records...</p>;

  const { recordId } = params;

  const selectedRecord = records.find(
    (record) => record.id.toString() === recordId,
  );

  if (!selectedRecord) {
    return <p>Record not found</p>;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Record,
  ) => {
    const updatedRecord = { ...selectedRecord, [field]: e.target.value };
    const updatedRecords = records.map((record) =>
      record.id === selectedRecord.id ? updatedRecord : record,
    );
    setRecords(updatedRecords);
  };

  const handleSaveClick = () => {
    // Handle saving client data here
    console.log('Record details saved:', editedRecord);
  };
 
  return (
    <div>
      <Container>
        <h1>修改病歷</h1>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Record ID"
                value={recordId}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="therapist"
                value={selectedRecord.therapist}
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, 'therapist')
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="treatment_type"
                value={selectedRecord.treatment_type}
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, 'treatment_type')
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="assessment_content"
                value={selectedRecord.assessment_content}
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, 'assessment_content')
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="treatment_content"
                value={selectedRecord.treatment_content}
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, 'treatment_content')
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="cash_fees"
                value={selectedRecord.cash_fees}
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, 'cash_fees')
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="prepaid"
                value={selectedRecord.prepaid}
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, 'prepaid')
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="remarks"
                value={selectedRecord.remarks}
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, 'remarks')
                }
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

export default ViewRecord;
