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
  Snackbar,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Entry, Record } from './RecordTypes';
import { fetchRecords } from './RecordUtils';
import AddProducts from '../../treatmentForm/AddProducts';

interface RecordDetailsProps {
  params: { recordId: string };
}

const ViewRecord: React.FC<RecordDetailsProps> = ({ params }) => {
  const [records, setRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState<Record | undefined>();
  const [editedRecord, setEditedRecord] = useState<Partial<Entry>>({});
  const [openAlert, setOpenAlert] = useState(false);
  const [expandedRecordIndex, setExpandedRecordIndex] = useState<number | null>(null);
  const [expandedRecordIndices, setExpandedRecordIndices] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(3);

  useEffect(() => {
    fetchRecords(params.recordId)
      .then((data) => {
        setRecords(data);
        const foundRecord = data[0];
        setSelectedRecord(foundRecord);
        setEditedRecord(foundRecord ? foundRecord.entries[0] : {});
        setLoading(false);
      });
  }, [params.recordId]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleInputChange = (
    field: keyof Entry,
    value: string | number | boolean,
  ) => {
    setEditedRecord((prev) => ({ ...prev, [field]: value }));
  };

  const handleTableClick = (index: number) => {
    setExpandedRecordIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        // If the clicked record is already expanded, collapse it
        return prevIndices.filter((idx) => idx !== index);
      } else {
        // Expand the clicked record
        return [...prevIndices, index];
      }
    });
  };

  const handleSaveClick = () => {
    console.log('Record details saved:', editedRecord);
  };

  const handleCancelClick = () => {
    setEditedRecord(selectedRecord?.entries[expandedRecordIndex ?? 0] ?? {});
  };

  const handleAddNewForm = () => {
    window.open('/treatmentForm', '_blank');
  };
  const resetDelete = () => {
    setOpenAlert(false); // Close the alert after resetting search
  };

  const handleCloseAlert = (
    event: React.SyntheticEvent | MouseEvent,
    reason: string,
  ) => {
    if (reason === ' ') {
      return;
    }
    setOpenAlert(false);
  };
  if (loading) return <Typography>Loading records...</Typography>;
  if (!selectedRecord) return <Typography>Record not found</Typography>;


  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = selectedRecord?.entries.slice(indexOfFirstEntry, indexOfLastEntry) || [];
  


  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: 10, marginBottom: 10 }}>
        Record Details
      </Typography>
      {currentEntries.map((entry: Entry, index: number) => (
          <Paper
          key={index}
          elevation={3}
          style={{ marginBottom: 10, padding: 2 }}
        >
          <Table>
            <TableBody>
              <TableRow
                key={selectedRecord.id}
                onClick={() => handleTableClick(index)}
              >
                <TableCell component="th" scope="row">
                  {entry.date}
                </TableCell>
                <TableCell align="center">{entry.therapist}</TableCell>
                <TableCell align="right">{entry.treatment_type}</TableCell>
                <TableCell>
                  <div onClick={() => handleTableClick(index)}>
                    <KeyboardArrowDownIcon />
                  </div>
                </TableCell>
              </TableRow>
              {expandedRecordIndices.includes(index) && (
                <TableRow key={`expanded-row-${index}`}>
                  <TableCell colSpan={4}>
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
                        <Grid container spacing={5}>
                          <Grid item xs={2}>
                            <TextField
                              label="date"
                              value={entry.date}
                              fullWidth
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                              ) => handleInputChange('date', e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={8}>
                            <Button
                              type="submit"
                              variant="contained"
                              color="primary"
                            >
                              收據: 0
                            </Button>
                            <Button
                              variant="contained"
                              color="default"
                              onClick={handleCancelClick}
                            >
                              刪除
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleAddNewForm}
                              style={{ marginLeft: '500px' }}
                            >
                              新增
                            </Button>
                          </Grid>
                          <Snackbar
                            open={openAlert}
                            autoHideDuration={5000}
                            onClose={handleCloseAlert}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'center',
                            }}
                            message="確定刪除嗎？"
                            action={
                              <>
                                <Button color="secondary" size="small">
                                  是
                                </Button>
                                <Button
                                  color="secondary"
                                  size="small"
                                  onClick={resetDelete}
                                >
                                  否
                                </Button>
                              </>
                            }
                          />
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid item xs={4}>
                            <FormControl fullWidth>
                              <TextField
                                label="治療師"
                                value={entry.therapist}
                                fullWidth
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>,
                                ) =>
                                  handleInputChange('therapist', e.target.value)
                                }
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={4}>
                            <FormControl fullWidth>
                              <TextField
                                label="治療項目"
                                value={entry.treatment_type}
                                fullWidth
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>,
                                ) =>
                                  handleInputChange(
                                    'treatment_type',
                                    e.target.value,
                                  )
                                }
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                        <TextField
                          label="assessment_content"
                          value={entry.assessment_content}
                          fullWidth
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(
                              'assessment_content',
                              e.target.value,
                            )
                          }
                        />
                        <TextField
                          label="treatment_content"
                          value={entry.treatment_content}
                          fullWidth
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(
                              'treatment_content',
                              e.target.value,
                            )
                          }
                        />
                        <Grid container spacing={2}>
                          <Grid item xs={3}>
                            <TextField
                              label="cash_fees"
                              value={entry.cash_fees}
                              fullWidth
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                              ) =>
                                handleInputChange('cash_fees', e.target.value)
                              }
                            />
                          </Grid>
                          <Grid item xs={3}>
                            <TextField
                              label="prepaid"
                              value={
                                entry.prepaid
                                  ? 'Yes'
                                  : 'No'
                              }
                              fullWidth
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                              ) => handleInputChange('prepaid', e.target.value)}
                            />
                          </Grid>
                        </Grid>
                        <TextField
                          label="remarks"
                          value={entry.remarks}
                          fullWidth
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleInputChange('remarks', e.target.value)
                          }
                        />
                        <Grid
                          item
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          xs={12}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            儲存
                          </Button>
                          <Button
                            variant="contained"
                            color="default"
                            onClick={handleCancelClick}
                          >
                            取消
                          </Button>
                        </Grid>
                      </Grid>
                      <AddProducts />
                    </form>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
         
        </Paper>
      ))}
      <Grid container justifyContent="center">
        <Button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous Page
        </Button>
        <Button
          disabled={currentEntries.length < entriesPerPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next Page
        </Button>
      </Grid>
    </Container>
  );
};

export default ViewRecord;
